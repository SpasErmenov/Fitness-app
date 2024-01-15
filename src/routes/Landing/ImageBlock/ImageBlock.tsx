import styles from "./ImageBlock.module.css";

const ImageBlock = () => {
  return (
    <div className={styles.imageBlock}>
      <div className={styles.headers}>
        <h1>Track more.</h1>
        <h1>Lift more.</h1>
      </div>
      <p>
        My fitness IDP for tracking your fitness progres. Please register and give it a try. I hope
        you like it.
      </p>
    </div>
  );
};

export default ImageBlock;
