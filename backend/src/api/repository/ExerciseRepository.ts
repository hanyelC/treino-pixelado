import { PrismaClient } from "@prisma/client";
import { IExerciseRepository } from "../interface/IExerciseRepository";

export class ExerciseRepository implements IExerciseRepository {
  constructor(private readonly prisma: PrismaClient) {}
  async createExercise(data: {
    name: string;
    duration: number;
    repetitions: number;
    gif_url: string;
    workout_id: number; //review
  }): Promise<{ id: number }> {
    return await this.prisma.exercise.create({ data });
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
    return await this.prisma.exercise.findMany();
  }
}
