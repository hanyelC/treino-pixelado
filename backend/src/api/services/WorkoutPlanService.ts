import { WorkoutPlanRepository } from "../repository/WorkoutPlanRepository";

export class WorkoutPlanService {
  constructor(private workoutPlanRepository: WorkoutPlanRepository) {}

  public async createWorkoutPlan(
    name: string,
    img_url: string,
    description?: string
  ): Promise<{ id: number }> {
    const workoutPlan = await this.workoutPlanRepository.createWorkoutPlan({
      name,
      img_url,
      description,
    });

    return workoutPlan;
  }

  public async getWorkoutPlan() {
    return await this.workoutPlanRepository.getWorkoutPlan();
  }

  public async deleteWorkoutPlan(id: number) {
    return await this.workoutPlanRepository.deleteWorkoutPlan(id);
  }
}
