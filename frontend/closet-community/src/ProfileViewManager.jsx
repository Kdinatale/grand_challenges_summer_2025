import { useState } from "react";

import EditIcon from "./assets/images/edit_icon.png";
import ProfilePage from "./ProfilePage";
import "./styles/ProfileViewManager.css";
import SaveButton from "./assets/images/save_button.png";
import UploadProfileImage from "./UploadProfileImage";
import { useRef } from "react";
import UploadFile from "./UploadFile";
import GetFile from "./GetFile";

function ProfileViewManager({ userId }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isImageUrl, setIsImageUrl] = useState("");

  const profileImageRef = useRef(null);

  const handleEditClick = async () => {
    if (profileImageRef.current && profileImageRef.current.files.length > 0) {
      const profileImageFile = profileImageRef.current.files[0];
      console.log(profileImageFile);
      try {
        const formData = new FormData();
        formData.append("file", profileImageFile);
        const response = await UploadFile(
          formData,
          `http://localhost:8080/uploadProfilePhoto/${userId}`
        );
        console.log("RESPONSE: " + response);
      } catch (e) {
        console.log(e);
      }
    }

    setIsEditMode(!isEditMode);
  };

  // useEffect(() => {
  //   console.log(isImageUrl);
  // }, [isImageUrl]);

  useEffect(() => {
    async function getProfilePhoto() {
      const response = await GetFile(
        `http://localhost:8080/getProfilePhoto/${userId}`
      );
      setIsImageUrl(response.data);
    }
    getProfilePhoto();
  }, []);

  return (
    <>
      {isEditMode ? (
        <ProfilePage
          userId={userId}
          profilePhoto={
            <UploadProfileImage
              ref={profileImageRef}
              profileImage={<GetFile />}
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
          userId={userId}
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
