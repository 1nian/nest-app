import { Injectable } from '@nestjs/common';
import { CreateReptileDto } from './dto/create-reptile.dto';
import { UpdateReptileDto } from './dto/update-reptile.dto';

import axios from 'axios';
import { decode } from 'iconv-lite'
import * as cheeerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ReptileService {
  create(createReptileDto: CreateReptileDto) {
    return 'This action adds a new reptile';
  }

  findAll() {
    return `This action returns all reptile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reptile`;
  }

  update(id: number, updateReptileDto: UpdateReptileDto) {
    return `This action updates a #${id} reptile`;
  }

  remove(id: number) {
    return `This action removes a #${id} reptile`;
  }

  // 爬取图片
  async getImages() {
    const urls: string[] = [];
    const baseUrl = 'https://www.xgmn01.com';
    let index = 0;

    const getCosplay = async () => {
      console.log(index);
      const body = await axios
        .get(`${baseUrl}/Xiuren/Xiuren24510${index ? '_' + index : ''}.html`)
        .then(async (res) => res.data);

      const $ = cheeerio.load(body);

      const pages = $('.pagination').eq(0).find('a');

      const pagesArr = pages
        .map(function () {
          return $(this).text();
        })
        .toArray();

      if (pagesArr.includes('下一页')) {
        $('.article-content p img').each(function () {
          urls.push(`${baseUrl}${$(this).attr('src')}`);
        });

        index++;
        await getCosplay();
      }
    };

    await getCosplay();

    // console.log(urls);

    this.writeFile(urls);
    return '完成';
  }

  // 将图片写入文件夹
  writeFile(urls: string[]) {
    urls.forEach(async (url) => {
      const buffer = await axios
        .get(url, { responseType: 'arraybuffer' })
        .then((res) => res.data);

      const ws = fs.createWriteStream(
        path.join(__dirname, '../../cos/' + new Date().getTime() + '.jpg'),
      );

      ws.write(buffer);
    });
  }
}
