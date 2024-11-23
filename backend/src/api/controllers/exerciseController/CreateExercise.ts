import { Request, Response } from 'express';
import { ExerciseService } from '../../services/ExerciseService';

export const createExercise = (exerciseService: ExerciseService) => {
  return async (req: Request, res: Response) => {
    try {
      const { name, duration, repetitions, gif_url, workout_id } = req.body;

      const exercise = await exerciseService.createExercise(
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
  };
};
