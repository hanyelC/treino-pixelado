export interface IExerciseRepository {
  createExercise(data: {
    name: string;
    duration?: number;
    repetitions: number;
    gif_url: string;
    workout_id: number; //review
  }): Promise<{ id: number }>;

  getExercise(): Promise<
    {
      name: string;
      repetitions: number;
      gif_url: string | null;
      duration?: number | null;
    }[]
  >;
}
