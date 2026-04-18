import { IsEnum, IsOptional } from 'class-validator';
import { AccountType } from '@prisma/client';

export class UpdateAccountDto {
  @IsEnum(AccountType)
  @IsOptional()
  type?: AccountType;
}