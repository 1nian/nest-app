import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  create(@Body() body) {
    const adminInfo = {
      name: 'admin',
      password: 'admin123',
    };

    const { name, password } = body;

    console.log(body);

    if (adminInfo.name === name) {
      if (adminInfo.password === password) {
        return {
          code: 200,
          msg: '登录成功',
          data: {
            token: new Date().getTime(),
            name,
          },
        };
      } else {
        return {
          code: 200,
          data: {},
          msg: '密码错误',
        };
      }
    } else {
      return {
        code: 200,
        data: {},
        msg: '用户名错误',
      };
    }
  }

  @Get('routers/:name')
  findAll(@Param('name') name: string) {
    return this.userService.findAll(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
