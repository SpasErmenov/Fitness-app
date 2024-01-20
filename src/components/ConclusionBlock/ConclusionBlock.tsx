import styles from "./ConclusionBlock.module.css";

interface IConclusionBlockProps {
  onJoinNowClick: () => void;
}

export const ConclusionBlock = (props: IConclusionBlockProps) => {
  return (
    <div className={styles.ConclusionBlock}>
      <h1 className={styles.ConclusionBlock__Title}>
        <span>Everyhing you need</span>
        <span>In one application</span>
      </h1>
      <p className={styles.ConclusionBlock__Content}>
        We have all feautures you will need to track your workouts. Keep track
        of your set, reps, exercises, progression and many more.
      </p>
      <button
        className={styles.ConclusionBlock__Button}
        onClick={props.onJoinNowClick}
      >
        Join now to find out
      </button>
    </div>
  );
};
