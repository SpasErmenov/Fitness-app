import { Button } from "@mui/material";
import styles from "./Home.module.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
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

export default Home;
