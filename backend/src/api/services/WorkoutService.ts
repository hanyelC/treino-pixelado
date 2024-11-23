import { WorkoutRepository } from "../repository/WorkoutRepository";

export class WorkoutService {
  constructor(private workoutRepository: WorkoutRepository) {}

  public async createWorkout(
    name: string,
    img_url: string,
    workout_plan_id: number //review
  ) {
    const workout = await this.workoutRepository.createWorkout({
      name,
      img_url,
      workout_plan_id,
    });

    return workout;
  }

  public async getWorkout() {
    return await this.workoutRepository.getWorkout();
  }
}
