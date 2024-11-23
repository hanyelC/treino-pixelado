import { Request, Response } from "express";
import { WorkoutPlanService } from "../../services/WorkoutPlanService";

export const createWorkoutPlan = (workoutCreatePlan: WorkoutPlanService) => {
  async (req: Request, res: Response) => {
    try {
      const { name, description, img_url } = req.body;

      const workoutPlan = await workoutCreatePlan.createWorkoutPlan(
        name,
        description,
        img_url
      );

      res.status(200).send(workoutPlan);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
};
