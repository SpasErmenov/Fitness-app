import styles from "./ConclusionBlock.module.css";

interface IConclusionBlockProps {
  onJoinNowClick: () => void;
}

const ConclusionBlock = (props: IConclusionBlockProps) => {
  const { onJoinNowClick } = props;

  const handleClick = () => {
    onJoinNowClick();
  };

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
        <label onClick={handleClick}>
          <u>Join now to find out.</u>
        </label>
      </div>
    </div>
  );
};
export default ConclusionBlock;