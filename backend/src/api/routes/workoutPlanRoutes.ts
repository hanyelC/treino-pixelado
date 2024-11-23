import { Router } from "express";
import { createWorkoutPlan } from "../controllers/workoutPlanController/CreateWorkoutPlan";
import { getWorkoutPlan } from "../controllers/workoutPlanController/GetWorkoutPlan";
import { deleteWorkoutPlan } from "../controllers/workoutPlanController/DeleteWorkoutPlan";
import { workoutPlanService } from "../config/dependencies";

const routes = Router();

routes.post("/workoutplan", createWorkoutPlan(workoutPlanService));
routes.get("/workoutsplan", getWorkoutPlan(workoutPlanService));
routes.delete("/workoutplan/:id", deleteWorkoutPlan(workoutPlanService));

export default routes;
