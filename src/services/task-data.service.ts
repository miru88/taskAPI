import { Injectable } from '@nestjs/common';
import { BaseDataService } from './base-data.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/index';
import { Repository } from 'typeorm';

@Injectable()
export class TaskDataService extends BaseDataService<Task> {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    )
    {
        super(taskRepository);
    }

}
