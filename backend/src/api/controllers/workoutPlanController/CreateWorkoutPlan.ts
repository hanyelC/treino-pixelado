import { Request, Response } from "express";
import { WorkoutPlanService } from "../../services/WorkoutPlanService";
import { WorkoutPlanRepository } from "../../repository/WorkoutPlanRepository";

export const createWorkoutPlan = async (req: Request, res: Response) => {
  try {
    const { name, description, img_url } = req.body;

    const workoutCreatePlan = new WorkoutPlanService(
      new WorkoutPlanRepository()
    );

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
