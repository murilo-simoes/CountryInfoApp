import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./CountryCard.module.css";

const CountryCard = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.countryTitle}>{name}</h1>
        <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
      </div>
    </div>
  );
};

export default CountryCard;
