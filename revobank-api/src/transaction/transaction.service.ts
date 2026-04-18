import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DepositDto, WithdrawDto, TransferDto } from './dto/transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  private async getAccountAndVerify(accountId: string, userId: string) {
    const account = await this.prisma.account.findUnique({
      where: { id: accountId },
    });
    if (!account) throw new NotFoundException('Account not found');
    if (account.userId !== userId) throw new ForbiddenException('Access denied');
    return account;
  }

  async deposit(userId: string, dto: DepositDto) {
    await this.getAccountAndVerify(dto.accountId, userId);

    const [transaction] = await this.prisma.$transaction([
      this.prisma.transaction.create({
        data: {
          type: 'DEPOSIT',
          amount: dto.amount,
          description: dto.description,
          toAccountId: dto.accountId,
        },
      }),
      this.prisma.account.update({
        where: { id: dto.accountId },
        data: { balance: { increment: dto.amount } },
      }),
    ]);

    return transaction;
  }

  async withdraw(userId: string, dto: WithdrawDto) {
    const account = await this.getAccountAndVerify(dto.accountId, userId);

    if (account.balance < dto.amount) {
      throw new BadRequestException('Insufficient balance');
    }

    const [transaction] = await this.prisma.$transaction([
      this.prisma.transaction.create({
        data: {
          type: 'WITHDRAW',
          amount: dto.amount,
          description: dto.description,
          fromAccountId: dto.accountId,
        },
      }),
      this.prisma.account.update({
        where: { id: dto.accountId },
        data: { balance: { decrement: dto.amount } },
      }),
    ]);

    return transaction;
  }

  async transfer(userId: string, dto: TransferDto) {
    const fromAccount = await this.getAccountAndVerify(dto.fromAccountId, userId);

    const toAccount = await this.prisma.account.findUnique({
      where: { id: dto.toAccountId },
    });
    if (!toAccount) throw new NotFoundException('Destination account not found');

    if (dto.fromAccountId === dto.toAccountId) {
      throw new BadRequestException('Cannot transfer to the same account');
    }

    if (fromAccount.balance < dto.amount) {
      throw new BadRequestException('Insufficient balance');
    }

    const [transaction] = await this.prisma.$transaction([
      this.prisma.transaction.create({
        data: {
          type: 'TRANSFER',
          amount: dto.amount,
          description: dto.description,
          fromAccountId: dto.fromAccountId,
          toAccountId: dto.toAccountId,
        },
      }),
      this.prisma.account.update({
        where: { id: dto.fromAccountId },
        data: { balance: { decrement: dto.amount } },
      }),
      this.prisma.account.update({
        where: { id: dto.toAccountId },
        data: { balance: { increment: dto.amount } },
      }),
    ]);

    return transaction;
  }

  async findAll(userId: string) {
    const accounts = await this.prisma.account.findMany({
      where: { userId },
      select: { id: true },
    });

    const accountIds = accounts.map((a) => a.id);

    return this.prisma.transaction.findMany({
      where: {
        OR: [
          { fromAccountId: { in: accountIds } },
          { toAccountId: { in: accountIds } },
        ],
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(userId: string, transactionId: string) {
    const accounts = await this.prisma.account.findMany({
      where: { userId },
      select: { id: true },
    });

    const accountIds = accounts.map((a) => a.id);

    const transaction = await this.prisma.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!transaction) throw new NotFoundException('Transaction not found');

    const hasAccess =
      (transaction.fromAccountId && accountIds.includes(transaction.fromAccountId)) ||
      (transaction.toAccountId && accountIds.includes(transaction.toAccountId));

    if (!hasAccess) throw new ForbiddenException('Access denied');

    return transaction;
  }
}