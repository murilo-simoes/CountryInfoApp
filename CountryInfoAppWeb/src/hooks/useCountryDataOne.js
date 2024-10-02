import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "dotenv/config";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchCountry = async (data) => {
  const response = await axios.get(API_URL + `/countries/getOne/${data}`);
  return response?.data;
};

export function useCountryDataOne(data) {
  const query = useQuery({
    queryFn: () => fetchCountry(data),
    queryKey: ["country-data", data],
    enabled: !!data,
  });

  return query;
}
