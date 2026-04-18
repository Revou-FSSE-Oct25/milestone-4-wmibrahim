import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  private generateAccountNumber(): string {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  }

  async create(userId: string, dto: CreateAccountDto) {
    const account = await this.prisma.account.create({
      data: {
        accountNumber: this.generateAccountNumber(),
        type: dto.type,
        userId,
      },
    });
    return account;
  }

  async findAll(userId: string) {
    return this.prisma.account.findMany({
      where: { userId },
    });
  }

  async findOne(userId: string, accountId: string) {
    const account = await this.prisma.account.findUnique({
      where: { id: accountId },
    });
    if (!account) throw new NotFoundException('Account not found');
    if (account.userId !== userId) throw new ForbiddenException('Access denied');
    return account;
  }

  async update(userId: string, accountId: string, dto: UpdateAccountDto) {
    await this.findOne(userId, accountId);
    return this.prisma.account.update({
      where: { id: accountId },
      data: { type: dto.type },
    });
  }

  async remove(userId: string, accountId: string) {
    await this.findOne(userId, accountId);
    await this.prisma.account.delete({ where: { id: accountId } });
    return { message: 'Account deleted successfully' };
  }
}