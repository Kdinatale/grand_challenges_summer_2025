import axios from "axios";

async function UploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  const userId = "689151d2f2aaa40b4e1b2b2e";
  const response = await axios.post(
    `http://localhost:8080/uploadProfilePhoto/${userId}`,
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
