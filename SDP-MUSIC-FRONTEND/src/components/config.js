import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:2025/api", // fallback
  withCredentials: true,
});

console.log("API URL =>", import.meta.env.VITE_API_URL);

export default api;