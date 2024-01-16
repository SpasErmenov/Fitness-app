// TODO Component
interface IExercisesProps {
  exercises: Maybe<object>;
}

const Exercises = (props: IExercisesProps) => {
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

export default Exercises;
