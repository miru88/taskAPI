import { Test, TestingModule } from '@nestjs/testing';
import { TaskMetaService } from './task-meta.service';

describe('TaskMetaService', () => {
  let service: TaskMetaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskMetaService],
    }).compile();

    service = module.get<TaskMetaService>(TaskMetaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
