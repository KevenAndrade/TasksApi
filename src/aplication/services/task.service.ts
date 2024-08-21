import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../../domain/repositories/task.repository';
import { Task } from '../../domain/entities/task.entity';
import { CreateTaskDto } from '../dto/createtaskdto';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TaskRepository') private readonly taskRepository: TaskRepository, 
  ) {}

  async createTask(dto: CreateTaskDto): Promise<Task> {
    const task = new Task(
      // Podia e devia ser UUID mas para ser mas pratico no teste utilizei Date
      new Date().toISOString(),
      dto.title,
      dto.description,
      'PENDING',
      new Date(),
    );
    return this.taskRepository.create(task);
  }

  async getTasks(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  async updateTaskStatus(id: string, status: string): Promise<Task> {
    return this.taskRepository.updateStatus(id, status);
  }

  async deleteTask(id: string): Promise<void> {
    return this.taskRepository.delete(id);
  }
}
