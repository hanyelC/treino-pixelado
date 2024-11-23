import Express from "express";

import exerciseRoutes from "./api/routes/exerciseRoutes";
import workoutRoutes from "./api/routes/workoutRoutes";
import workoutPlanRoutes from "./api/routes/workoutPlanRoutes";

const app = Express();

const PORT = 3000;

app.use(Express.json());

app.use("/api", exerciseRoutes);
app.use("/api", workoutRoutes);
app.use("/api", workoutPlanRoutes);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
