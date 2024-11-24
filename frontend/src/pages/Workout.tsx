import { Link, useLocation } from "react-router";
import { WorkoutCardProps } from "../components/WorkoutCard";

export function Workout() {
  const workoutData = useLocation().state as WorkoutCardProps;

  console.log("workoutData.description", workoutData.description);
  return (
    <div className="h-screen">
      <div className="text-black flex justify-between items-center bg-white px-4">
        <Link
          style={{
            fontSize: "30px",
          }}
          to={"/workoutPlan"}
        >
          {"<"}
        </Link>
        <p className="text-xl">{workoutData.name}</p>
      </div>

      <div className="p-4 flex flex-col gap-6 bg-gray-200 h-full">
        <p className="text-center text-black text-lg">
          {workoutData.description}
        </p>

        <div className="px-4 flex flex-col gap-2">
          {workoutData.exercises.map((exerciseItem) => {
            return (
              <div className="flex gap-2 bg-slate-400 p-2 rounded-md text-black">
                <img
                  className="w-14 h-w-14"
                  src={workoutData.imageUrl}
                  alt="Imagem de exercício"
                />

                <div>
                  <p>{exerciseItem.name}</p>
                  <p>{exerciseItem.series} Repetições</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
