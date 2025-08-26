import axios from "axios";

async function GetFile(url) {
  const response = await axios.get(url);
  return response;
}

export default GetFile;
