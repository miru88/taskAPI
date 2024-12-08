import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TaskDataService } from 'src/services/task-data.service';
import { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dto';

@Controller('task')
export class TaskController {
    constructor(private readonly taskDataService: TaskDataService) {}

@Get('/getAll/:userId')
getAllTasks(@Param('userId') userId: number) {
    return this.taskDataService.findAllBy('userId',userId);
}

@Get('/getOne/:taskId')//for later, get authorization for this particular task by id
getTask(@Param('taskId') taskId: number) {
    return this.taskDataService.findOne(taskId);
}

@Post('/create')//this creates a task, but no due date and the userId must be passed into the body for now
createTask(@Body() data: CreateTaskDto) {
    return this.taskDataService.create(data);

}

@Put('/update/:taskId')
updateTask(@Param('taskId') taskId: number, @Body() data: UpdateTaskDto ) {
    return this.taskDataService.update(taskId, data);

}

@Delete('/delete/:taskId')
deleteTask(@Param('taskId') taskId: number) {
    return this.taskDataService.delete(taskId);
}

}
