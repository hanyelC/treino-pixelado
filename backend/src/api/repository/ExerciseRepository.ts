import { PrismaClient } from "@prisma/client";
import { IExerciseRepository } from "../interface/IExerciseRepository";
const prisma = new PrismaClient();

export class ExerciseRepository implements IExerciseRepository {
  async createExercise(data: {
    name: string;
    duration: number;
    repetitions: number;
    gif_url: string;
    workout_id: number; //review
  }): Promise<{ id: number }> {
    return await prisma.exercise.create({ data });
  }

  async getExercise(): Promise<
    {
      name: string;
      duration?: number | null;
      repetitions: number;
      gif_url: string | null;
      workout_id?: number | null;
    }[]
  > {
    return await prisma.exercise.findMany();
  }
}
