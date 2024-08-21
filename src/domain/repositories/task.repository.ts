import { Task } from '../entities/task.entity';


//As implementaçoes estao em infrastructure/repositories
export interface TaskRepository {
  create(task: Task): Promise<Task>;
  findAll(): Promise<Task[]>;
  updateStatus(id: string, status: string): Promise<Task>;
  delete(id: string): Promise<void>;
}
