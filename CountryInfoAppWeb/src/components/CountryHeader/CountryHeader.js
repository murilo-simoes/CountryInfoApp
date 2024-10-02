import { useCountryDataOne } from "@/hooks/useCountryDataOne";
import styles from "./CountryHeader.module.css";

const CountryHeader = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.countryName}>{data?.borders?.commonName}</h1>
        <div className={styles.countryFlagDiv}>
          <img
            src={data?.flag}
            alt="Country flag"
            className={styles.countryFlag}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryHeader;
