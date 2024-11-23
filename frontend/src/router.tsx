import { createBrowserRouter } from "react-router";
import { Workout } from "./pages/Workout";
import { WorkoutPlan } from "./pages/WorkoutPlan";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WorkoutPlan />,
  },
  {
    path: "/workout",
    element: <Workout />,
  },
]);
