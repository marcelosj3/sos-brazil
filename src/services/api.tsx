import axios from "axios";

export const api = axios.create({
  baseURL: "https://capstone-api-grupo-1.herokuapp.com",
});
