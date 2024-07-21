import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: movie/now_playing?api_key=1f044149653f684e988c7b4a718ca1f3&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
