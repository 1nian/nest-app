import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const data = new User();
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
}
