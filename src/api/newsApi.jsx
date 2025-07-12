import axios from "axios";

const API_KEY = "a378cc63ebf6481dbfc9a37b906a649c";
const BASE_URL = "https://newsapi.org/v2";

export const fetchTopHeadlines = async () => {
  const response = await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
  return response.data.articles;
};
