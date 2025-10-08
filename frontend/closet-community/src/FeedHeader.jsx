import "./styles/FeedHeader.css";

function FeedHeader({ profileImage, Username }) {
  return (
    <>
      <div className="user-profile-header">
        <div className="header-content">
          <div className="profile-image-container">
            <div className="profile-image-border">{profileImage}</div>
          </div>
          <div className="user-information-container">
            <div className="username-container">
              <h1>{Username}'s Closet</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedHeader;
