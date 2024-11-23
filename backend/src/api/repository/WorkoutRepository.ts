import { PrismaClient } from '@prisma/client';
import { IWorkoutRepository } from '../interface/IWorkoutRepository';

export class WorkoutRepository implements IWorkoutRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createWorkout(data: {
    name: string;
    img_url: string;
    workout_plan_id?: number; //review
  }): Promise<{ id: number }> {
    return await this.prisma.workout.create({ data });
  }

  async getWorkout(): Promise<{ name: string; img_url: string }[]> {
    return await this.prisma.workout.findMany();
  }
}
