import { ExerciseRepository } from "../repository/ExerciseRepository";

export class ExerciseService {
  constructor(private exerciseRepository: ExerciseRepository) {}

  public async createExercise(
    name: string,
    repetitions: number,
    duration: number,
    gif_url: string,
    workout_id: number // review
  ) {
    const exercise = await this.exerciseRepository.createExercise({
      name,
      duration,
      repetitions,
      gif_url,
      workout_id,
    });

    return exercise;
  }

  public async getExercise() {
    return await this.exerciseRepository.getExercise();
  }
}
