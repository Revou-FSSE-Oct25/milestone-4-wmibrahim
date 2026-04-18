import { IsEnum, IsOptional } from 'class-validator';
import { AccountType } from '@prisma/client';

export class CreateAccountDto {
  @IsEnum(AccountType)
  @IsOptional()
  type?: AccountType;
}