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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AccountService = class AccountService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    generateAccountNumber() {
        return Math.floor(1000000000 + Math.random() * 9000000000).toString();
    }
    async create(userId, dto) {
        const account = await this.prisma.account.create({
            data: {
                accountNumber: this.generateAccountNumber(),
                type: dto.type,
                userId,
            },
        });
        return account;
    }
    async findAll(userId) {
        return this.prisma.account.findMany({
            where: { userId },
        });
    }
    async findOne(userId, accountId) {
        const account = await this.prisma.account.findUnique({
            where: { id: accountId },
        });
        if (!account)
            throw new common_1.NotFoundException('Account not found');
        if (account.userId !== userId)
            throw new common_1.ForbiddenException('Access denied');
        return account;
    }
    async update(userId, accountId, dto) {
        await this.findOne(userId, accountId);
        return this.prisma.account.update({
            where: { id: accountId },
            data: { type: dto.type },
        });
    }
    async remove(userId, accountId) {
        await this.findOne(userId, accountId);
        await this.prisma.account.delete({ where: { id: accountId } });
        return { message: 'Account deleted successfully' };
    }
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AccountService);
//# sourceMappingURL=account.service.js.map