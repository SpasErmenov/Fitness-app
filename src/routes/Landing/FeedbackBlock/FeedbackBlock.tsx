import FeedbackCard from "../../../components/UI/FeedbackCard/FeedbackCard";
import styles from "./FeedbackBlock.module.css";
import { usersFeedbackBlockPicture } from "../../../constants/users-feedback-block-pictures";

export const FeedbackBlock = () => {
  return (
    <div className={styles.feedbackBlock}>
      <div className={styles.headers}>
        <h1>Our Fitness App for everyone.</h1>
        <h2>
          No matter your level of experience and your training program. <br />
          Use our application to achieve your goals.
        </h2>
      </div>
      <div className={styles.grid}>
        {usersFeedbackBlockPicture.map((user) => (
          <FeedbackCard key={user.id} name={user.name} imgPath={user.imgPath} />
        ))}
      </div>
    </div>
  );
};
