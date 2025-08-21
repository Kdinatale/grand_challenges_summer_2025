import ProfilePage from "./ProfilePage";
import EditIcon from "./assets/images/edit_icon.png";

function EditProfilePage() {
  return (
    <>
      <ProfilePage
        profilePhoto={<></>}
        iconImage={<img className="edit-icon" src={EditIcon}></img>}
      />
    </>
  );
}
export default EditProfilePage;
