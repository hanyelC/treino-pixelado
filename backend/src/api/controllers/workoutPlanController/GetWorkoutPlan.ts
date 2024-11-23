import { Request, Response } from "express";
import { WorkoutPlanService } from "../../services/WorkoutPlanService";

export const getWorkoutPlan = (listWorkoutsPlan: WorkoutPlanService) => {
  async (req: Request, res: Response) => {
    try {
      const workoutsPlan = await listWorkoutsPlan.getWorkoutPlan();

      res.status(200).json({ workoutsPlan });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
};
