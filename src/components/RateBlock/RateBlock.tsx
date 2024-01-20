import { Rating } from "@mui/material";
import styles from "./RateBlock.module.css";

export const RateBlock = () => {
  return (
    <div className={styles.RateBlock}>
      <h1 className={styles.RateBlock__Title}>We like numbers</h1>
      <div className={styles.RateBlock__Content}>
        <div>
          <p>App Store</p>
          <Rating
            sx={{
              "& .MuiRating-iconFilled": {
                color: "black",
              },
            }}
            name="read-only"
            value={5}
            readOnly
          />
          <p>Over 10,000 users have our app on their devices</p>
        </div>
        <div>
          <p>Google Play Store</p>
          <Rating
            sx={{
              "& .MuiRating-iconFilled": {
                color: "black",
              },
            }}
            name="read-only"
            value={5}
            readOnly
          />
          <p>Over 20,000 worldwide reviews</p>
        </div>
        <div>
          <p>Web App</p>
          <Rating
            sx={{
              "& .MuiRating-iconFilled": {
                color: "black",
              },
            }}
            name="read-only"
            value={5}
            readOnly
          />
          <p>Only one developer using it at this moment</p>
        </div>
      </div>
    </div>
  );
};
