export interface IWorkoutPlanRepository {
  createWorkoutPlan(data: {
    name: string;
    description?: string | undefined;
    img_url: string;
  }): Promise<{ id: number }>;

  getWorkoutPlan(): Promise<
    { id: number; name: string; description: string | null }[]
  >;

  deleteWorkoutPlan(id: number): Promise<{ id: number }>;
}
