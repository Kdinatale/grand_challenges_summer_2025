import axios from "axios";

async function UploadFile(formData, url) {
  console.log("UPLOADFILE URL: " + url);
  const response = await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response);
}
export default UploadFile;
