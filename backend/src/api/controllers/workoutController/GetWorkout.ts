import { Request, Response } from "express";
import { WorkoutService } from "../../services/WorkoutService";
import { WorkoutRepository } from "../../repository/WorkoutRepository";

export const getWorkout = async (req: Request, res: Response) => {
  try {
    const listWorkouts = new WorkoutService(new WorkoutRepository());

    const workouts = await listWorkouts.getWorkout();

    res.status(200).json({ workouts });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
