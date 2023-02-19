import axios from "axios";

const httpGet = async (title, query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${title}?api_key=${import.meta.env.VITE_API_KEY
    }${query}`
  );
  return data;
};

export { httpGet };
