import { IsEnum, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { TransactionType } from '@prisma/client';

export class DepositDto {
  @IsUUID()
  accountId: string;

  @IsNumber()
  @Min(1)
  amount: number;

  @IsString()
  @IsOptional()
  description?: string;
}

export class WithdrawDto {
  @IsUUID()
  accountId: string;

  @IsNumber()
  @Min(1)
  amount: number;

  @IsString()
  @IsOptional()
  description?: string;
}

export class TransferDto {
  @IsUUID()
  fromAccountId: string;

  @IsUUID()
  toAccountId: string;

  @IsNumber()
  @Min(1)
  amount: number;

  @IsString()
  @IsOptional()
  description?: string;
}