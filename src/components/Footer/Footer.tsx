import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__Grid}>
        <h2 className={styles.Footer__Logo}>logo</h2>
        <div>
          <p className={styles.Footer__Title}>Recources</p>
          <p>Help Center</p>
          <p>Terms of Service</p>
          <p>Privacy</p>
          <p>Contact us</p>
        </div>
        <div>
          <p className={styles.Footer__Title}>Social</p>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div>
          <p className={styles.Footer__Title}>Download</p>
          <p>App Store</p>
          <p>Google Play</p>
        </div>
      </div>
      <div className={styles.Footer__CopyrightText}>
        <p>Copyright &copy; 2024 Spas Ermenov. All Rights Reserved</p>
      </div>
    </div>
  );
};
