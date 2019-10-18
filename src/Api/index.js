import axios from "axios";

const api = axios.create({
  baseURL: "https://techcrunch.com/wp-json/"
});

export default api;
