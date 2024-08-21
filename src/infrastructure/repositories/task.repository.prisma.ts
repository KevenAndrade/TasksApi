// src/infrastructure/repositories/task.repository.prisma.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TaskRepository } from 'src/domain/repositories/task.repository';
import { Task } from 'src/domain/entities/task.entity';

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(task: Task): Promise<Task> {
    const createdTask = await this.prisma.task.create({
      data: {
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
        createdAt: task.createdAt,
      },
    });
    return new Task(createdTask.id, createdTask.title, createdTask.description, createdTask.status, createdTask.createdAt);
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();
    return tasks.map(task => new Task(task.id, task.title, task.description, task.status, task.createdAt));
  }

  async updateStatus(id: string, status: string): Promise<Task> {
    const updatedTask = await this.prisma.task.update({
      where: { id },
      data: { status },
    });
    return new Task(updatedTask.id, updatedTask.title, updatedTask.description, updatedTask.status, updatedTask.createdAt);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.task.delete({ where: { id } });
  }
}
