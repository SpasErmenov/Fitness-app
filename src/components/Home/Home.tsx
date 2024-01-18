import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate();
  const onStartNewWorkoutButtonClick = useCallback(() => {
    navigate("/home/create-workout");
  }, [navigate]);

  return (
    <div className={styles.homeBackGround}>
      <div className={styles.startNewWorkoutButton}>
        <Button variant="contained" onClick={onStartNewWorkoutButtonClick}>
          Start new workout
        </Button>
      </div>
    </div>
  );
};
