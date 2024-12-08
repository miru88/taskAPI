import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';

export enum TaskStatus {//this is duplicated, place enum somwhere and import
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsNumber()
  @IsOptional()
  userId: number;
}

export class UpdateTaskDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    title: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsEnum(TaskStatus)
    @IsOptional()    
    status: TaskStatus;
  
    @IsNumber()
    @IsOptional()
    userId: number;
}
