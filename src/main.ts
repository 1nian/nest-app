import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response } from './common/response';
import { HttpExceptionFilter } from './common/filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new Response());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
