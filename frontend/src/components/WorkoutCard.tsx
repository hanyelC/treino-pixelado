type WorkoutCardProps = {
  name: string;
};
export function WorkoutCard(props: WorkoutCardProps) {
  return <p>{props.name}</p>;
}
