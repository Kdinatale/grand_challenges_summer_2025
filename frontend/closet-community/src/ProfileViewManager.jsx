import { useEffect, useState } from "react";
import EditIcon from "./assets/images/edit_icon.png";
import ProfilePage from "./ProfilePage";
import "./styles/ProfileViewManager.css";
import SaveButton from "./assets/images/save_button.png";
import UploadProfileImage from "./UploadProfileImage";
import BlankProfileImage from "./assets/images/blank_profile_image.png";
import { useRef } from "react";
import UploadFile from "./UploadFile";
import GetFile from "./GetFile";

function ProfileViewManager() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isImageUrl, setIsImageUrl] = useState("");

  const profileImageRef = useRef(null);

  const handleEditClick = async () => {
    if (profileImageRef.current && profileImageRef.current.files.length > 0) {
      const profileImageFile = profileImageRef.current.files[0];
      console.log(profileImageFile);
      try {
        const response = await UploadFile(profileImageFile);
        console.log("RESPONSE: " + response);
      } catch (e) {
        console.log(e);
      }
    }

    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    console.log(isImageUrl);
  }, [isImageUrl]);

  useEffect(() => {
    async function getProfilePhoto() {
      const response = await GetFile();
      setIsImageUrl(response.data);
    }
    getProfilePhoto();
  }, []);

  return (
    <>
      {isEditMode ? (
        <ProfilePage
          profilePhoto={
            <UploadProfileImage
              ref={profileImageRef}
              imagePlaceHolder={BlankProfileImage}
            />
          }
          profileImageRef={profileImageRef}
          iconImage={
            <img
              onClick={handleEditClick}
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
              onClick={handleEditClick}
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
