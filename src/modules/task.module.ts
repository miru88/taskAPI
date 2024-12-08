import { Global, Module } from '@nestjs/common';
import { TaskDataService } from '../services/task-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../entities/index';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([Task])],
  providers: [TaskDataService],  // Register service here
  exports: [TaskDataService],    // Export for other modules if needed
})
export class TaskModule {}
