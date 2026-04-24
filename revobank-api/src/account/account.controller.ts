import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ApiTags('Accounts')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('accounts')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @ApiOperation({ summary: 'Create bank account' })
  @Post()
  create(@Request() req, @Body() dto: CreateAccountDto) {
    return this.accountService.create(req.user.sub, dto);
  }

  @ApiOperation({ summary: 'List all user accounts' })
  @Get()
  findAll(@Request() req) {
    return this.accountService.findAll(req.user.sub);
  }

  @ApiOperation({ summary: 'Get account by id' })
  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.accountService.findOne(req.user.sub, id);
  }

  @ApiOperation({ summary: 'Update account' })
  @Patch(':id')
  update(@Request() req, @Param('id') id: string, @Body() dto: UpdateAccountDto) {
    return this.accountService.update(req.user.sub, id, dto);
  }

  @ApiOperation({ summary: 'Delete account' })
  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.accountService.remove(req.user.sub, id);
  }
}