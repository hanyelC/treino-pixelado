import { useNavigate } from "react-router";

export type WorkoutCardProps = {
  name: string;
  imageUrl: string;
  description: string;
  exercises: {
    name: string;
    series: string;
    imageUrl: string;
  }[];
};
export function WorkoutCard(props: WorkoutCardProps) {
  const navigate = useNavigate();

  const handleClickWorkoutItemCard = () => {
    navigate("/workout", {
      state: {
        name: props.name,
        imageUrl: props.imageUrl,
        exercises: props.exercises,
        description: props.description,
      },
    });
  };

  return (
    <div
      className="bg-white text-gray-950 p-3 rounded-xl flex flex-col gap-3"
      onClick={handleClickWorkoutItemCard}
    >
      <div className="flex justify-between">
        <div>
          <p className="black text-xl">{props.name}</p>
          <p>{props.exercises.length} exercises</p>
        </div>

        <img
          className="w-16 h-w-16"
          src={props.imageUrl}
          alt="Imagem de exercício"
        />
      </div>

      <div>
        {props.exercises.map((item, index) => (
          <div key={index} className="flex justify-between">
            <p>{item.name}</p>
            <p>{item.series}</p>
          </div>
        ))}
      </div>

      <a className="w-full text-end block text-xs font-bold">View All</a>
    </div>
  );
}
