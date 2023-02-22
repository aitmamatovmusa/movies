import axios from "axios";
import { BASE_URL } from "@/config";

const httpGet = async (title, query = "") => {
  const { data } = await axios.get(
    `${BASE_URL}${title}?api_key=${import.meta.env.VITE_API_KEY}${query}`
  );
  return data;
};

export { httpGet };
