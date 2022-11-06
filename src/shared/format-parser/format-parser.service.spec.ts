import { Test, TestingModule } from '@nestjs/testing';
import { FormatParserService } from './format-parser.service';

describe('FormatParserService', () => {
  let service: FormatParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormatParserService],
    }).compile();

    service = module.get<FormatParserService>(FormatParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
