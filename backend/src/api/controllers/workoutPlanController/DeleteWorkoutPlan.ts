import { Request, Response } from "express";
import { WorkoutPlanService } from "../../services/WorkoutPlanService";
import { WorkoutPlanRepository } from "../../repository/WorkoutPlanRepository";

export const deleteWorkoutPlan = async (req: Request, res: Response) => {
  try {
    const workoutPlanId = Number(req.params.id);

    const removeWorkoutPlan = new WorkoutPlanService(
      new WorkoutPlanRepository()
    );

    const workoutPlan = removeWorkoutPlan.deleteWorkoutPlan(workoutPlanId);

    res.status(200).send(workoutPlan);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
