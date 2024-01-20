import styles from "./CreateWorkout.module.css";
import { CreateWorkoutForm } from "../Forms/CreateWorkoutForm/CreateWorkoutForm";

export const CreateWorkout = () => {
  return (
    <div className={styles.createWorkout}>
      <CreateWorkoutForm />
    </div>
  );
};
