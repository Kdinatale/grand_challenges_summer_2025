import "./styles/PostHeader.css";
function PostHeader({ profileImageUrl, username }) {
  return (
    <>
      <div className="post-header-container">
        <div className="header-content">
          <div className="profile-image-container">
            <div className="profile-image-border">
              <img className="profile-photo-img" src={profileImageUrl}></img>
            </div>
          </div>
          <div className="user-information-container">
            <div className="username-container">
              <p className="username-text">{username}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostHeader;
