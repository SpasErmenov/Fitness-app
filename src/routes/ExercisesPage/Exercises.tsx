// TODO Component
interface IExercises {
  exercises: Maybe<object>;
}

const Exercises = (props: IExercises) => {
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
