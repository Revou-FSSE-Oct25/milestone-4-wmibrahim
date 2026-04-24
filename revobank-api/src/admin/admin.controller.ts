import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@ApiTags('Admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @ApiOperation({ summary: 'Get all users' })
  @Get('users')
  findAllUsers() {
    return this.adminService.findAllUsers();
  }

  @ApiOperation({ summary: 'Get user by id' })
  @Get('users/:id')
  findOneUser(@Param('id') id: string) {
    return this.adminService.findOneUser(id);
  }

  @ApiOperation({ summary: 'Get all accounts' })
  @Get('accounts')
  findAllAccounts() {
    return this.adminService.findAllAccounts();
  }

  @ApiOperation({ summary: 'Get all transactions' })
  @Get('transactions')
  findAllTransactions() {
    return this.adminService.findAllTransactions();
  }
}