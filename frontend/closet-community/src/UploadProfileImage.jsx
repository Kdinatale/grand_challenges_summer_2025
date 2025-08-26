import React, { forwardRef } from "react";

const UploadProfileImage = forwardRef(({ profileImage }, ref) => {
  return (
    <>
      <form>
        <label htmlFor="profile-image-input">
          <img className="profile-photo-img" src={profileImage}></img>
        </label>
        <input
          ref={ref}
          id="profile-image-input"
          style={{ display: "none" }}
          type="file"
        ></input>
      </form>
    </>
  );
});

export default UploadProfileImage;
