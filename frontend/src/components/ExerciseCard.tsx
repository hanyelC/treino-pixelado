type ExerciseCardProps = {
  imgUrl?: string;
  name: string;
};

export function ExerciseCard(props: ExerciseCardProps) {
  return (
    <div className="flex gap-2 al">
      {props.imgUrl && <img src={props.imgUrl} alt="" />}

      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
}
