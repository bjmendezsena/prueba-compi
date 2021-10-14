import axios from "axios";


const API_URL = "https://api.mocklets.com/mock68016";


export const apiInstance = axios.create({
  baseURL: API_URL,
});
