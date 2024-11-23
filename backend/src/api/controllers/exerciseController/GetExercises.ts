import { Request, Response } from "express";
import { ExerciseRepository } from "../../repository/ExerciseRepository";
import { ExerciseService } from "../../services/ExerciseService";

export const getExercises = async (req: Request, res: Response) => {
  try {
    const listExercises = new ExerciseService(new ExerciseRepository());

    const exercises = await listExercises.getExercise();

    res.status(200).json({ exercises });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
