import axios from "axios";

const httpGet = (title) => {
  return axios.get(
    `https://imdb-api.com/en/API/${title}/${import.meta.env.VITE_API_KEY}/`
  );
};

export { httpGet };
