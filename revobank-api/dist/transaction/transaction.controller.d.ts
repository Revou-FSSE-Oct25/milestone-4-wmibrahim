import { TransactionService } from './transaction.service';
import { DepositDto, WithdrawDto, TransferDto } from './dto/transaction.dto';
export declare class TransactionController {
    private transactionService;
    constructor(transactionService: TransactionService);
    deposit(req: any, dto: DepositDto): Promise<{
        id: string;
        createdAt: Date;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: number;
        description: string | null;
        fromAccountId: string | null;
        toAccountId: string | null;
    }>;
    withdraw(req: any, dto: WithdrawDto): Promise<{
        id: string;
        createdAt: Date;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: number;
        description: string | null;
        fromAccountId: string | null;
        toAccountId: string | null;
    }>;
    transfer(req: any, dto: TransferDto): Promise<{
        id: string;
        createdAt: Date;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: number;
        description: string | null;
        fromAccountId: string | null;
        toAccountId: string | null;
    }>;
    findAll(req: any): Promise<{
        id: string;
        createdAt: Date;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: number;
        description: string | null;
        fromAccountId: string | null;
        toAccountId: string | null;
    }[]>;
    findOne(req: any, id: string): Promise<{
        id: string;
        createdAt: Date;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: number;
        description: string | null;
        fromAccountId: string | null;
        toAccountId: string | null;
    }>;
}
