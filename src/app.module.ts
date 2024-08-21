import { Module } from '@nestjs/common';
import { TaskController } from './infrastructure/controllers/task.controller';
import { TaskService } from './aplication/services/task.service';
import { PrismaService } from './infrastructure/prisma/prisma.service';
import { PrismaTaskRepository } from './infrastructure/repositories/task.repository.prisma';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [
    TaskService,
    PrismaService,
    {
      provide: 'TaskRepository',
      useClass: PrismaTaskRepository,
    },
  ],
})
export class AppModule {}
