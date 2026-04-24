import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { TransactionService } from './transaction.service';
import { DepositDto, WithdrawDto, TransferDto } from './dto/transaction.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ApiTags('Transactions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @ApiOperation({ summary: 'Deposit to account' })
  @Post('deposit')
  deposit(@Request() req, @Body() dto: DepositDto) {
    return this.transactionService.deposit(req.user.sub, dto);
  }

  @ApiOperation({ summary: 'Withdraw from account' })
  @Post('withdraw')
  withdraw(@Request() req, @Body() dto: WithdrawDto) {
    return this.transactionService.withdraw(req.user.sub, dto);
  }

  @ApiOperation({ summary: 'Transfer between accounts' })
  @Post('transfer')
  transfer(@Request() req, @Body() dto: TransferDto) {
    return this.transactionService.transfer(req.user.sub, dto);
  }

  @ApiOperation({ summary: 'List all transactions' })
  @Get()
  findAll(@Request() req) {
    return this.transactionService.findAll(req.user.sub);
  }

  @ApiOperation({ summary: 'Get transaction by id' })
  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.transactionService.findOne(req.user.sub, id);
  }
}