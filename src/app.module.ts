import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ReptileModule } from './reptile/reptile.module';

@Module({
  imports: [UserModule, ReptileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
