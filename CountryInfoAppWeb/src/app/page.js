import Provider from "@/components/Provider/Provider";
import styles from "./page.module.css";

import CountryList from "@/components/CountryList/CountryList";
import SearchBar from "@/components/SearchBar/SearchBar";
import TitleHeader from "@/components/TitlePage/TitleHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  return (
    <>
      <Provider>
        <TitleHeader />
        <CountryList />
      </Provider>
    </>
  );
}
