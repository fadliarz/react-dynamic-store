import styles from "../appStyle.module.scss";

function Footer() {
  return (
    <div className={styles.credits}>
      <div className={styles.responsiveContainer}>
        <h3>Created by @fadliarz</h3>
        <a href="https://instagram.com/fadliarz" target="_blank">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Footer;
