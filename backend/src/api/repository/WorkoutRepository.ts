import { PrismaClient } from "@prisma/client";
import { IWorkoutRepository } from "../interface/IWorkoutRepository";

const prisma = new PrismaClient();

export class WorkoutRepository implements IWorkoutRepository {
  async createWorkout(data: {
    name: string;
    img_url: string;
    workout_plan_id?: number; //review
  }): Promise<{ id: number }> {
    return await prisma.workout.create({ data });
  }

  async getWorkout(): Promise<{ name: string; img_url: string }[]> {
    return await prisma.workout.findMany();
  }
}
