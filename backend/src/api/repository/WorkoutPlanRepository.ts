import { PrismaClient } from "@prisma/client";
import { IWorkoutPlanRepository } from "../interface/IWorkoutPlanRepository";

export class WorkoutPlanRepository implements IWorkoutPlanRepository {
  constructor(private readonly prisma: PrismaClient) {}
  async createWorkoutPlan(data: {
    name: string;
    description?: string;
    img_url: string;
  }): Promise<{ id: number }> {
    return await this.prisma.workoutPlan.create({ data });
  }

  async getWorkoutPlan(): Promise<
    { id: number; name: string; description: string | null }[]
  > {
    return await this.prisma.workoutPlan.findMany();
  }

  async deleteWorkoutPlan(id: number): Promise<{ id: number }> {
    return await this.prisma.workoutPlan.delete({ where: { id } });
  }
}
