import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <h1>logo</h1>
        <div>
          <p className={styles.headers}>Recources</p>
          <p>Help Center</p>
          <p>Terms of Service</p>
          <p>Privacy</p>
          <p>Contact us</p>
        </div>
        <div>
          <p className={styles.headers}>Social</p>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div>
          <p className={styles.headers}>Download</p>
          <p>App Store</p>
          <p>Google Play</p>
        </div>
      </div>
      <div className={styles.copyrightText}>
        <p>Copyright &copy; 2023 Spas Ermenov. All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
