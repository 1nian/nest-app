import { Module } from '@nestjs/common';
import { ReptileService } from './reptile.service';
import { ReptileController } from './reptile.controller';

@Module({
  controllers: [ReptileController],
  providers: [ReptileService]
})
export class ReptileModule {}
