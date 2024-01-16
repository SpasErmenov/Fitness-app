import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Exercises from "../routes/ExercisesPage/Exercises";
import { exercisesStore } from "../stores/stores";

const ExercisesContainer = observer(() => {
  useEffect(() => {
    const fetchExercises = async () => {
      await exercisesStore.getExercises();
    };

    fetchExercises();
  }, []);
  const { exercise } = exercisesStore;

  return <Exercises exercises={exercise} />;
});

export default ExercisesContainer;
