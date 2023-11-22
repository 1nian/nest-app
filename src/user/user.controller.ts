import { Controller, Post, Body, Get, Res, Session } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Session() session) {
    return this.userService.create(createUserDto, session);
  }

  @Get('code')
  sendCode(@Res() res, @Session() session) {
    return this.userService.sendCode(res, session);
  }
}
