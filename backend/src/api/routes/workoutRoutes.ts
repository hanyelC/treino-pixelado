import { Router } from "express";
import { createWorkout } from "../controllers/workoutController/CreateWorkout";
import { getWorkout } from "../controllers/workoutController/GetWorkout";
import { workoutService } from "../config/dependencies";

const routes = Router();

routes.post("/workout", createWorkout(workoutService));
routes.get("/workouts", getWorkout(workoutService));

export default routes;
