import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import * as svgCaptcha from 'svg-captcha';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto, session) {
    const data = new User();

    console.log(session.code);

    data.username = createUserDto.username;
    data.password = createUserDto.password;
    const res = await this.user.save(data);
    if (res.id) {
      return {
        token: `${new Date().getTime()}`,
      };
    } else {
      return {
        token: '',
      };
    }
  }

  // 生成验证码
  async sendCode(res, session) {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      background: '#cc9966',
    });

    session.code = captcha.text;

    res.type('image/svg+xml');

    res.send(captcha?.data);
  }
}
