import { Button, TextField } from "@mui/material";
import styles from "./CreateWorkout.module.css";
// import { useCallback } from "react";
const CreateWorkout = () => {
//   const handleAddExerciseButtonClick = useCallback(() => {}, []);
  return (
    <div className={styles.createWorkout}>
      <div className={styles.formFields}>
        <TextField
          id="standard-basic"
          label="Workout Title"
          variant="standard"
        />
        <Button variant="contained">Add Exercise</Button>
      </div>
    </div>
  );
};

export default CreateWorkout;
