import { observer } from "mobx-react-lite";
import { Exercises } from "@/components/Exercises/Exercises";
import { exercisesStore } from "@/stores/stores";

export const ExercisesContainer = observer(() => {
  const { exercises } = exercisesStore;

  return <Exercises exercises={exercises} />;
});
