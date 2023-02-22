import { Test, TestingModule } from '@nestjs/testing';
import { ReptileController } from './reptile.controller';
import { ReptileService } from './reptile.service';

describe('ReptileController', () => {
  let controller: ReptileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReptileController],
      providers: [ReptileService],
    }).compile();

    controller = module.get<ReptileController>(ReptileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
