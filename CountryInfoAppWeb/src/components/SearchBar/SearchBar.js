import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchBar.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ change }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
          <input
            className={styles.search}
            placeholder="Type a country to search"
            onChange={change}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
