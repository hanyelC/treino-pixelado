import { Request, Response } from 'express';
import { ExerciseService } from '../../services/ExerciseService';

export class GetExercisesController {
  constructor(private readonly listExercises: ExerciseService) {}

  async handle(req: Request, res: Response) {
    try {
      console.log('alo');
      const exercises = await this.listExercises.getExercise();

      res.status(200).json({ exercises });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
