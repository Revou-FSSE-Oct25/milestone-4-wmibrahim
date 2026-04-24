import { AdminService } from './admin.service';
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    findAllUsers(): Promise<{
        name: string;
        email: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOneUser(id: string): Promise<{
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
