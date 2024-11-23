import { Router } from 'express';
import {
  createWorkoutController,
  getWorkoutController,
} from '../config/dependencies';

const routes = Router();

routes.post('/workouts', (req, res) =>
  createWorkoutController.handle(req, res)
);
routes.get('/workouts', (req, res) => getWorkoutController.handle(req, res));

export default routes;
