import { Request, Response } from 'express';
import { ExerciseService } from '../../services/ExerciseService';

export class CreateExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, duration, repetitions, gif_url, workout_id } = req.body;

      const exercise = await this.exerciseService.createExercise(
        name,
        duration,
        repetitions,
        gif_url,
        workout_id
      );

      res.status(200).json(exercise);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
