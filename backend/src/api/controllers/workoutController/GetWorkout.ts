import { Request, Response } from 'express';
import { WorkoutService } from '../../services/WorkoutService';

export class GetWorkoutController {
  constructor(private readonly listWorkouts: WorkoutService) {}

  async handle(req: Request, res: Response) {
    try {
      const workouts = await this.listWorkouts.getWorkout();

      res.status(200).json({ workouts });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
