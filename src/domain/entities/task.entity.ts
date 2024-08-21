// src/domain/entities/task.entity.ts
export class Task {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public status: string,
      public createdAt: Date
    ) {}
  
    // Métodos de negócio podem ser adicionados aqui
    markAsInProgress() {
      if (this.status === 'PENDING') {
        this.status = 'IN_PROGRESS';
      } else {
        throw new Error('Task cannot be marked as In Progress');
      }
    }
  
    markAsDone() {
      if (this.status === 'IN_PROGRESS') {
        this.status = 'DONE';
      } else {
        throw new Error('Task cannot be marked as Done');
      }
    }
  }
  