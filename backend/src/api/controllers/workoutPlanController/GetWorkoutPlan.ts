import { Request, Response } from "express";
import { WorkoutPlanService } from "../../services/WorkoutPlanService";
import { WorkoutPlanRepository } from "../../repository/WorkoutPlanRepository";

export const getWorkoutPlan = async (req: Request, res: Response) => {
  try {
    const listWorkoutsPlan = new WorkoutPlanService(
      new WorkoutPlanRepository()
    );

    const workoutsPlan = await listWorkoutsPlan.getWorkoutPlan();

    res.status(200).json({ workoutsPlan });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
