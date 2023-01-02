import { Test, TestingModule } from '@nestjs/testing';
import { ReptileService } from './reptile.service';

describe('ReptileService', () => {
  let service: ReptileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReptileService],
    }).compile();

    service = module.get<ReptileService>(ReptileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
