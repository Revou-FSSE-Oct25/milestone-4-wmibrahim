import { PrismaService } from '../prisma/prisma.service';
import { DepositDto, WithdrawDto, TransferDto } from './dto/transaction.dto';
export declare class TransactionService {
    private prisma;
    constructor(prisma: PrismaService);
    private getAccountAndVerify;
    deposit(userId: string, dto: DepositDto): Promise<{
        id: string;
        createdAt: Date;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: number;
        description: string | null;
        fromAccountId: string | null;
        toAccountId: string | null;
    }>;
    withdraw(userId: string, dto: WithdrawDto): Promise<{
        id: string;
        createdAt: Date;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: number;
        description: string | null;
        fromAccountId: string | null;
        toAccountId: string | null;
    }>;
    transfer(userId: string, dto: TransferDto): Promise<{
        id: string;
        createdAt: Date;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: number;
        description: string | null;
        fromAccountId: string | null;
        toAccountId: string | null;
    }>;
    findAll(userId: string): Promise<{
        id: string;
        createdAt: Date;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: number;
        description: string | null;
        fromAccountId: string | null;
        toAccountId: string | null;
    }[]>;
    findOne(userId: string, transactionId: string): Promise<{
        id: string;
        createdAt: Date;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: number;
        description: string | null;
        fromAccountId: string | null;
        toAccountId: string | null;
    }>;
}
