import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
export declare class AccountController {
    private accountService;
    constructor(accountService: AccountService);
    create(req: any, dto: CreateAccountDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        accountNumber: string;
        balance: number;
        type: import(".prisma/client").$Enums.AccountType;
        userId: string;
    }>;
    findAll(req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        accountNumber: string;
        balance: number;
        type: import(".prisma/client").$Enums.AccountType;
        userId: string;
    }[]>;
    findOne(req: any, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        accountNumber: string;
        balance: number;
        type: import(".prisma/client").$Enums.AccountType;
        userId: string;
    }>;
    update(req: any, id: string, dto: UpdateAccountDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        accountNumber: string;
        balance: number;
        type: import(".prisma/client").$Enums.AccountType;
        userId: string;
    }>;
    remove(req: any, id: string): Promise<{
        message: string;
    }>;
}
