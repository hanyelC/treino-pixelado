import { Request, Response } from "express";
import { ExerciseService } from "../../services/ExerciseService";

export const getExercises = (listExercises: ExerciseService) => {
  return async (req: Request, res: Response) => {
    try {
      const exercises = await listExercises.getExercise();

      res.status(200).json({ exercises });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
};
