// TODO Component is still in progress
import { IExercise } from "@/interfaces/interfaces";

interface IExercisesProps {
  exercises: IExercise[];
}

export const Exercises = (props: IExercisesProps) => {
  const { exercises } = props;

  return (
    <>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      {JSON.stringify(exercises)}
    </>
  );
};
