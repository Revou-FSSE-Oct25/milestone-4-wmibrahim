import { Controller, Get, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  getProfile(@Request() req) {
    return this.userService.getProfile(req.user.sub);
  }

  @Patch('profile')
  updateProfile(@Request() req, @Body() dto: UpdateUserDto) {
    return this.userService.updateProfile(req.user.sub, dto);
  }
}