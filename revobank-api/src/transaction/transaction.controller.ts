import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { DepositDto, WithdrawDto, TransferDto } from './dto/transaction.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post('deposit')
  deposit(@Request() req, @Body() dto: DepositDto) {
    return this.transactionService.deposit(req.user.sub, dto);
  }

  @Post('withdraw')
  withdraw(@Request() req, @Body() dto: WithdrawDto) {
    return this.transactionService.withdraw(req.user.sub, dto);
  }

  @Post('transfer')
  transfer(@Request() req, @Body() dto: TransferDto) {
    return this.transactionService.transfer(req.user.sub, dto);
  }

  @Get()
  findAll(@Request() req) {
    return this.transactionService.findAll(req.user.sub);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.transactionService.findOne(req.user.sub, id);
  }
}