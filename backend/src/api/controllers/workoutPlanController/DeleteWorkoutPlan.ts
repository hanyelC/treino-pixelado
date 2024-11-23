import { Request, Response } from "express";
import { WorkoutPlanService } from "../../services/WorkoutPlanService";

export const deleteWorkoutPlan = (removeWorkoutPlan: WorkoutPlanService) => {
  async (req: Request, res: Response) => {
    try {
      const workoutPlanId = Number(req.params.id);

      const workoutPlan = removeWorkoutPlan.deleteWorkoutPlan(workoutPlanId);

      res.status(200).send(workoutPlan);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
};
