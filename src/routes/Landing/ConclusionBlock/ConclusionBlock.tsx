import styles from "./ConclusionBlock.module.css";

interface IConclusionBlockProps {
  onJoinNowClick: () => void;
}

export const ConclusionBlock = (props: IConclusionBlockProps) => {
  return (
    <div className={styles.conclusionBlock}>
      <div className={styles.text}>
        <h1>
          Everyhing you need.
          <br />
          In one application.
        </h1>
        <p>
          We have all feautures you will need to track your workouts. Keep track
          of your set, reps, exercises, progression and many more.
        </p>
        <label onClick={props.onJoinNowClick}>
          <u>Join now to find out.</u>
        </label>
      </div>
    </div>
  );
};
