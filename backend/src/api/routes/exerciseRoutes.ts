import { Router } from 'express';
import {
  createExerciseController,
  getExerciseController,
} from '../config/dependencies';

const routes = Router();

routes.post('/exercises', (req, res) =>
  createExerciseController.handle(req, res)
);
routes.get('/exercises', (req, res) => getExerciseController.handle(req, res));

export default routes;
