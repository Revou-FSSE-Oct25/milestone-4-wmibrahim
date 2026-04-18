"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TransactionService = class TransactionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAccountAndVerify(accountId, userId) {
        const account = await this.prisma.account.findUnique({
            where: { id: accountId },
        });
        if (!account)
            throw new common_1.NotFoundException('Account not found');
        if (account.userId !== userId)
            throw new common_1.ForbiddenException('Access denied');
        return account;
    }
    async deposit(userId, dto) {
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
    async withdraw(userId, dto) {
        const account = await this.getAccountAndVerify(dto.accountId, userId);
        if (account.balance < dto.amount) {
            throw new common_1.BadRequestException('Insufficient balance');
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
    async transfer(userId, dto) {
        const fromAccount = await this.getAccountAndVerify(dto.fromAccountId, userId);
        const toAccount = await this.prisma.account.findUnique({
            where: { id: dto.toAccountId },
        });
        if (!toAccount)
            throw new common_1.NotFoundException('Destination account not found');
        if (dto.fromAccountId === dto.toAccountId) {
            throw new common_1.BadRequestException('Cannot transfer to the same account');
        }
        if (fromAccount.balance < dto.amount) {
            throw new common_1.BadRequestException('Insufficient balance');
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
    async findAll(userId) {
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
    async findOne(userId, transactionId) {
        const accounts = await this.prisma.account.findMany({
            where: { userId },
            select: { id: true },
        });
        const accountIds = accounts.map((a) => a.id);
        const transaction = await this.prisma.transaction.findUnique({
            where: { id: transactionId },
        });
        if (!transaction)
            throw new common_1.NotFoundException('Transaction not found');
        const hasAccess = (transaction.fromAccountId && accountIds.includes(transaction.fromAccountId)) ||
            (transaction.toAccountId && accountIds.includes(transaction.toAccountId));
        if (!hasAccess)
            throw new common_1.ForbiddenException('Access denied');
        return transaction;
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map