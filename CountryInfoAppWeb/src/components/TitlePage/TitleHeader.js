import styles from "./TitleHeader.module.css";

const TitleHeader = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Country Info App</h1>
    </div>
  );
};

export default TitleHeader;
