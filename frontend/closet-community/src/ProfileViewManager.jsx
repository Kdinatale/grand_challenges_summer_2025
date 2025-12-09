import { useState } from "react";

import EditIcon from "./assets/images/edit_icon.png";
import ProfilePage from "./ProfilePage";
import "./styles/ProfileViewManager.css";
import SaveButton from "./assets/images/save_button.png";
import UploadProfileImage from "./UploadProfileImage";
import { useEffect } from "react";
import TemporaryProfileImage from "./assets/images/blank_profile_image.png";
import UploadFile from "./UploadFile";
import { getFile } from "./GetFile";

function ProfileViewManager() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isImageUrl, setIsImageUrl] = useState(TemporaryProfileImage);
  const [profileImageFile, setProfileImageFile] = useState(
    TemporaryProfileImage
  );

  useEffect(() => {
    async function load() {
      const data = await getFile("http://localhost:8080/getProfilePhoto/");
      setIsImageUrl(data);
    }
    load();
  }, []);

  useEffect(() => {
    console.log("PROFILE PHOTO URLS: ", isImageUrl);

    if (isImageUrl && isImageUrl.length > 0) {
      setIsImageUrl(isImageUrl);
    }
  }, [isImageUrl]);

  const enterEditMode = () => {
    setIsEditMode(true);
  };

  const handleFileSelected = (file) => {
    setProfileImageFile(file);
    setIsImageUrl(URL.createObjectURL(file));
  };

  const handleFileSave = async () => {
    try {
      const formData = new FormData();
      formData.append("file", profileImageFile);
      const response = await UploadFile(
        formData,
        `http://localhost:8080/uploadProfilePhoto/`
      );
      console.log("RESPONSE: " + response);
      setIsEditMode(!isEditMode);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isEditMode ? (
        <ProfilePage
          profilePhoto={
            <UploadProfileImage
              profileImage={<img src={isImageUrl}></img>}
              onFileSelected={handleFileSelected}
            />
          }
          iconImage={
            <img
              onClick={handleFileSave}
              className="save-icon"
              src={SaveButton}
            ></img>
          }
        />
      ) : (
        <ProfilePage
          profilePhoto={<img src={isImageUrl} />}
          clothingItemOne={<></>}
          iconImage={
            <img
              onClick={enterEditMode}
              className="edit-icon"
              src={EditIcon}
            ></img>
          }
        />
      )}
    </>
  );
}

export default ProfileViewManager;
