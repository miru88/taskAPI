import { Test, TestingModule } from '@nestjs/testing';
import { TaskDataService } from './task-data.service';

describe('TaskDataService', () => {
  let service: TaskDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskDataService],
    }).compile();

    service = module.get<TaskDataService>(TaskDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
