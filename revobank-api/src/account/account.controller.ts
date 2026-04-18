import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('accounts')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post()
  create(@Request() req, @Body() dto: CreateAccountDto) {
    return this.accountService.create(req.user.sub, dto);
  }

  @Get()
  findAll(@Request() req) {
    return this.accountService.findAll(req.user.sub);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.accountService.findOne(req.user.sub, id);
  }

  @Patch(':id')
  update(@Request() req, @Param('id') id: string, @Body() dto: UpdateAccountDto) {
    return this.accountService.update(req.user.sub, id, dto);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.accountService.remove(req.user.sub, id);
  }
}