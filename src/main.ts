import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response } from './common/response';
import { HttpExceptionFilter } from './common/filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new Response());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useStaticAssets(join(__dirname, 'images'));
  app.use(
    session({
      secret: '1nian',
      rolling: true,
      name: '1nian.sid',
      resave: false,
      saveUninitialized: true,
    }),
  );

  const swaggerOptions = new DocumentBuilder().setTitle('nest-app-api').build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('/api', app, document);

  await app.listen(3000);
}
bootstrap();
