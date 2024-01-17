import { observer } from "mobx-react-lite";
import Exercises from "../routes/ExercisesPage/Exercises";
import { exercisesStore } from "../stores/stores";

const ExercisesContainer = observer(() => {
  const { exercises } = exercisesStore;

  return <Exercises exercises={exercises} />;
});

export default ExercisesContainer;
