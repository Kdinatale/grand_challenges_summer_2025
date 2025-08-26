import axios from "axios";

async function GetFile() {
  const userId = "689151d2f2aaa40b4e1b2b2e";
  const response = await axios.get(
    `http://localhost:8080/getProfilePhoto/${userId}`
  );
  return response;
}

export default GetFile;
