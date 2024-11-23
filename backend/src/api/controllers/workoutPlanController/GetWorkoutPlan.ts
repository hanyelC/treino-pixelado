import { Request, Response } from 'express';
import { WorkoutPlanService } from '../../services/WorkoutPlanService';

export class GetWorkoutPlanController {
  constructor(private readonly listWorkoutsPlan: WorkoutPlanService) {}

  async handle(req: Request, res: Response) {
    try {
      const workoutsPlan = await this.listWorkoutsPlan.getWorkoutPlan();

      res.status(200).json({ workoutsPlan });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
