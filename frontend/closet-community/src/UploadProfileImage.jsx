const UploadProfileImage = ({ profileImage, onFileSelected }) => {
  return (
    <>
      <label htmlFor="profile-image-input">
        <img className="profile-photo-img" src={profileImage}></img>
      </label>
      <input
        id="profile-image-input"
        style={{ display: "none" }}
        type="file"
        onChange={(e) => onFileSelected(e.target.files[0])}
      ></input>
    </>
  );
};

export default UploadProfileImage;
