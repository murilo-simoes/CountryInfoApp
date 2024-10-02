import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "dotenv/config";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async () => {
  const response = await axios.get(API_URL + "/countries/getAll");
  return response?.data;
};

export function useCountryData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["countries-data"],
  });

  return query;
}
