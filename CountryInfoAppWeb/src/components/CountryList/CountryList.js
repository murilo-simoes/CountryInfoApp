"use client";
import { useCountryData } from "@/hooks/useCountryData";
import CountryCard from "../CountryCard/CountryCard";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./CountryList.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CountryList = () => {
  const { data } = useCountryData();
  const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
    if (data) {
      setDataFiltered(data);
    }
  }, [data]);

  const filterData = (search) => {
    const filtered = data.filter((s) =>
      s.name.trim().toLowerCase().includes(search.trim().toLowerCase())
    );
    setDataFiltered(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SearchBar change={(e) => filterData(e.target.value)} />
        <div className={styles.wrapperList}>
          {dataFiltered?.map((item) => {
            return (
              <Link
                key={item.countryCode}
                href={`/countries/${item.countryCode}`}
              >
                <CountryCard name={item.name} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
