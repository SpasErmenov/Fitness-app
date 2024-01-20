import styles from "./ImageBlock.module.css";

export const ImageBlock = () => {
  return (
    <div className={styles.ImageBlock}>
      <div className={styles.ImageBlock__Title}>
        <h1>Track more.</h1>
        <h1>Lift more.</h1>
      </div>
      <p className={styles.ImageBlock__Content}>
        My fitness IDP for tracking your fitness progres. Please register and
        give it a try. I hope you like it.
      </p>
    </div>
  );
};
