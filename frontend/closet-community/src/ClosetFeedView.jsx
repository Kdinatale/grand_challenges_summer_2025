import Browser from "./Browser";
import FeedHeader from "./FeedHeader";
import profilePhoto from "./assets/images/profile_photo_test.JPEG";

function ClosetFeedView() {
  return (
    <>
      <Browser>
        <FeedHeader
          profileImage={
            <img className="profile-photo-img" src={profilePhoto}></img>
          }
          Username={"kwd2002"}
        />
      </Browser>
    </>
  );
}

export default ClosetFeedView;
