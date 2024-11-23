import { Request, Response } from "express";
import { WorkoutService } from "../../services/WorkoutService";

export const getWorkout = (listWorkouts: WorkoutService) => {
  return async (req: Request, res: Response) => {
    try {
      const workouts = await listWorkouts.getWorkout();

      res.status(200).json({ workouts });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
};
