export interface IWorkoutRepository {
  createWorkout(data: {
    name: string;
    img_url: string;
    workout_plan_id: number; //review
  }): Promise<{ id: number }>;

  getWorkout(): Promise<{ name: string; img_url: string }[]>;
}
