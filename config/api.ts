import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.NEXT_PUBLIC_MOVIEDB_API_KEY,
    language: "en-US",
  },
});
