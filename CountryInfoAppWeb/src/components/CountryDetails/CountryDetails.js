import styles from "./CountryDetails.module.css";
import { useCountryDataOne } from "@/hooks/useCountryDataOne";
import CountryHeader from "../CountryHeader/CountryHeader";
import CountryCard from "../CountryCard/CountryCard";
import Link from "next/link";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement
);

const CountryDetails = ({ countryCode }) => {
  const { data, error, isLoading } = useCountryDataOne(countryCode);

  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 15,
          },
        },
      },
      title: {
        display: true,
        text: "Population over the years",
        font: {
          size: 20,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const dataBar = {
    labels: data?.populations?.data?.populationCounts?.map((item) => item.year),
    datasets: [
      {
        label: "Quantity of people",
        data: data?.populations?.data?.populationCounts?.map(
          (item) => item.value
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error getting country info.</div>;

  return (
    <div>
      <CountryHeader data={data} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.countryBorders}>
            <h1 className={styles.countryBordersTitle}>Border Countries</h1>
            <div className={styles.wrapperList}>
              {data?.borders?.borders.map((item) => {
                return (
                  <Link
                    key={item.countryCode}
                    href={`/countries/${item.countryCode}`}
                  >
                    <CountryCard name={item.commonName} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div style={{ width: "80%" }}>
            <Bar options={optionsBar} data={dataBar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
