import axios from "axios";

import { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";

import { useAccessToken } from "./useAccessToken";

function GetFile() {
  const [fileUrl, setFileUrl] = useState(null);

  const getToken = useAccessToken();

  useEffect(() => {
    const getProfilePhoto = async () => {
      const token = await getToken();
      if (!token) return;

      console.log("TOKEN ", token);

      const response = await axios.get(
        "http://localhost:8080/getProfilePhoto/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("RESPONSE ", response);
      console.log("RESPONSE DATA", response.data);

      const data = response.data;
      setFileUrl(data);
      console.log("Profile data:", data);
    };

    getProfilePhoto();
  }, [getToken]);

  return <img src={fileUrl} />;
async function GetFile(url) {
  const response = await axios.get(url);
  return response;
}

export default GetFile;
