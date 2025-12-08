import axios from "axios";

export async function getFile(url) {
  const token = localStorage.getItem("token");

  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
}
