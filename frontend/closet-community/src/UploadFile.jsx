import axios from "axios";

async function UploadFile(formData, url) {
  console.log("UPLOADFILE URL: " + url);
  const token = localStorage.getItem("token");
  if (!token) return;
  const response = await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
}
export default UploadFile;
