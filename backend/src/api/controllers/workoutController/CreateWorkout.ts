import { Request, Response } from 'express';
import { WorkoutService } from '../../services/WorkoutService';

export class CreateWorkoutController {
  constructor(private readonly workoutCreate: WorkoutService) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, img_url, workout_plan_id } = req.body;

      const exercise = await this.workoutCreate.createWorkout(
        name,
        img_url,
        workout_plan_id //review
      );

      res.status(200).json(exercise);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
