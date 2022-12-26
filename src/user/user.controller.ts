import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
      pasword: 'admin123',
    };

    const { name, pasword } = body;

    console.log(body);

    if (adminInfo.name === name) {
      if (adminInfo.pasword === pasword) {
        return {
          code: 200,
          msg: '登录成功',
          token: new Date().getTime(),
          data: {
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

  @Get()
  findAll() {
    return this.userService.findAll();
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
