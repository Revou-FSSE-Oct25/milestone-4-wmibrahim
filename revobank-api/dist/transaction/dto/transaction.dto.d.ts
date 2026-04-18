export declare class DepositDto {
    accountId: string;
    amount: number;
    description?: string;
}
export declare class WithdrawDto {
    accountId: string;
    amount: number;
    description?: string;
}
export declare class TransferDto {
    fromAccountId: string;
    toAccountId: string;
    amount: number;
    description?: string;
}
