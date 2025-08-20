import profilePhoto from "./assets/images/profile_photo_test.JPEG";
import ProfilePage from "./ProfilePage";

function ViewProfilePage() {
  return (
    <>
      <ProfilePage
        profilePhoto={
          <img className="profile-photo-img" src={profilePhoto}></img>
        }
        clothingItemOne={<></>}
      />
    </>
  );
}
export default ViewProfilePage;
