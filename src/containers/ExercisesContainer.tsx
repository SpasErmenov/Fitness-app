import { useEffect } from "react";
import Exercises from "../routes/ExercisesPage/Exercises";
import { exercisesStore } from "../stores/AuthStore/stores";
import { observer } from "mobx-react-lite";

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
