import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from '../../aplication/services/task.service';
import { CreateTaskDto } from '../../aplication/dto/createtaskdto';
import { UpdateTaskStatusDto } from '../../aplication/dto/update-task-status.dto';
import { Task } from 'src/domain/entities/task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Body() dto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(dto);
  }

  @Get()
  async getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Patch(':id/status')
  async updateTaskStatus(@Param('id') id: string, @Body() dto: UpdateTaskStatusDto): Promise<Task> {
    return this.taskService.updateTaskStatus(id, dto.status);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<{ message: string }> {
    await this.taskService.deleteTask(id);
    return { message: 'Task deleted successfully' };
  }
}
