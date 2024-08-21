// src/domain/repositories/task.repository.ts
import { Task } from '../entities/task.entity';

export interface TaskRepository {
  create(task: Task): Promise<Task>;
  findAll(): Promise<Task[]>;
  updateStatus(id: string, status: string): Promise<Task>;
  delete(id: string): Promise<void>;
}
