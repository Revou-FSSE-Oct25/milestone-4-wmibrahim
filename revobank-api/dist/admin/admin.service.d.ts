import { PrismaService } from '../prisma/prisma.service';
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllUsers(): Promise<{
        name: string;
        email: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOneUser(userId: string): Promise<{
        name: string;
        email: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
        accounts: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            type: import(".prisma/client").$Enums.AccountType;
            accountNumber: string;
            balance: number;
            userId: string;
        }[];
    } | null>;
    findAllAccounts(): Promise<({
        user: {
            name: string;
            email: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.AccountType;
        accountNumber: string;
        balance: number;
        userId: string;
    })[]>;
    findAllTransactions(): Promise<{
        id: string;
        createdAt: Date;
        description: string | null;
        type: import(".prisma/client").$Enums.TransactionType;
        amount: number;
        fromAccountId: string | null;
        toAccountId: string | null;
    }[]>;
}
