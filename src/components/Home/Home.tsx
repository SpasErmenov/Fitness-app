import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { CREATE_WORKOUT_PAGE } from "@/routes/paths.constants";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(CREATE_WORKOUT_PAGE);
  }, [navigate]);

  return (
    <div className={styles.Home}>
      <div className={styles.Home__Button}>
        <Button variant="contained" onClick={handleClick}>
          Start new workout
        </Button>
      </div>
    </div>
  );
};
