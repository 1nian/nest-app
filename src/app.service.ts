import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      code: 200,
      msg: '请求成功',
      data: {
        list1: [
          {
            name: '本年计划营收---api',
            num: '500.00',
            unit: '亿元',
          },
          {
            name: '本年实际营收---api',
            num: '300.00',
            unit: '亿元',
          },
        ],
        rate: Math.random() * 100,
      },
    };
  }
}
