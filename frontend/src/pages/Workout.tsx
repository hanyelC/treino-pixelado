import { Link, useLocation } from "react-router";
import { WorkoutCardProps } from "../components/WorkoutCard";

export function Workout() {
  const workoutData = useLocation().state as WorkoutCardProps;

  return (
    <div className="">
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

      <p className="text-center">{workoutData.description}</p>

      <div className="px-4">
        {workoutData.exercises.map((exerciseItem) => {
          return (
            <div>
              <div>
                {/* img */}

                <div>
                  <p>{exerciseItem.name}</p>
                  <p>Repetições</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
