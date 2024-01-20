import { usersFeedbackBlockPicture } from "@/constants/users-feedback-block-pictures";
import styles from "./FeedbackBlock.module.css";
import { FeedbackCard } from "@/components/UI/FeedbackCard/FeedbackCard";

export const FeedbackBlock = () => {
  return (
    <div className={styles.FeedbackBlock}>
      <div className={styles.FeedbackBlock__Title}>
        <h1>Our Fitness App for everyone.</h1>
        <h2>
          No matter your level of experience and your training program. <br />
          Use our application to achieve your goals.
        </h2>
      </div>
      <div className={styles.FeedbackBlock__Grid}>
        {usersFeedbackBlockPicture.map((user) => (
          <FeedbackCard key={user.id} name={user.name} imgPath={user.imgPath} />
        ))}
      </div>
    </div>
  );
};
