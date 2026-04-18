import { PrismaService } from '../prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
export declare class AccountService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateAccountNumber;
    create(userId: string, dto: CreateAccountDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.AccountType;
        accountNumber: string;
        balance: number;
        userId: string;
    }>;
    findAll(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.AccountType;
        accountNumber: string;
        balance: number;
        userId: string;
    }[]>;
    findOne(userId: string, accountId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.AccountType;
        accountNumber: string;
        balance: number;
        userId: string;
    }>;
    update(userId: string, accountId: string, dto: UpdateAccountDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.AccountType;
        accountNumber: string;
        balance: number;
        userId: string;
    }>;
    remove(userId: string, accountId: string): Promise<{
        message: string;
    }>;
}
