import { Request, Response } from "express";
import { WorkoutService } from "../../services/WorkoutService";
import { WorkoutRepository } from "../../repository/WorkoutRepository";

export const createWorkout = async (req: Request, res: Response) => {
  try {
    const { name, img_url, workout_plan_id } = req.body;

    const workoutCreate = new WorkoutService(new WorkoutRepository());

    const exercise = await workoutCreate.createWorkout(
      name,
      img_url,
      workout_plan_id //review
    );

    res.status(200).json(exercise);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
