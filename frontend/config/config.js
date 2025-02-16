export const API_BASE_URL = process.env.REACT_APP_API_URL || "https://brandspark-4.onrender.com";
import { API_BASE_URL } from "./config";

fetch(`${API_BASE_URL}/api/data`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));
