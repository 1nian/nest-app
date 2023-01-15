import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Upload } from './entities/upload.entity';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Upload) private readonly upload: Repository<Upload>,
  ) {}

  async create(file, createUploadDto: CreateUploadDto) {
    const url = 'http://localhost:3000';
    const data = new Upload();
    data.name = `${file.originalname.split('.')[0]}`;
    data.url = `${url}/${file.filename}`;
    const res = await this.upload.save(data);
    if (res.id) {
      return {
        msg: '上传成功',
        url: data.url,
      };
    } else {
      return {
        msg: '上传失败',
        url: '',
      };
    }
  }
}
