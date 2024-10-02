"use client";
import CountryDetails from "@/components/CountryDetails/CountryDetails";
import Provider from "@/components/Provider/Provider";
import { useCountryDataOne } from "@/hooks/useCountryDataOne";
import { useParams } from "next/navigation";

export default function Page() {
  const { countryCode } = useParams();

  return (
    <Provider>
      <CountryDetails countryCode={countryCode} />
    </Provider>
  );
}
