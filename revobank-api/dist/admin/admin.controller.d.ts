import { AdminService } from './admin.service';
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    findAllUsers(): Promise<{
        id: string;
        email: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOneUser(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
        accounts: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            accountNumber: string;
            balance: number;
            type: import(".prisma/client").$Enums.AccountType;
            userId: string;
        }[];
    } | null>;
    findAllAccounts(): Promise<({
        user: {
            id: string;
            email: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        accountNumber: string;
        balance: number;
        type: import(".prisma/client").$Enums.AccountType;
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
