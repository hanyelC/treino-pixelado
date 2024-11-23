import { PrismaClient } from "@prisma/client";
import { IWorkoutPlanRepository } from "../interface/IWorkoutPlanRepository";
const prisma = new PrismaClient();

export class WorkoutPlanRepository implements IWorkoutPlanRepository {
  async createWorkoutPlan(data: {
    name: string;
    description?: string;
    img_url: string;
  }): Promise<{ id: number }> {
    return await prisma.workoutPlan.create({ data });
  }

  async getWorkoutPlan(): Promise<
    { id: number; name: string; description: string | null }[]
  > {
    return await prisma.workoutPlan.findMany();
  }

  async deleteWorkoutPlan(id: number): Promise<{ id: number }> {
    return await prisma.workoutPlan.delete({ where: { id } });
  }
}
