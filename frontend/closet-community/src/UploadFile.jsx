import axios from "axios";

async function UploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axios.post(
    "http://localhost:8080/uploadProfilePhoto",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(response);
}
export default UploadFile;
