import Browser from "./Browser";
import FeedHeader from "./FeedHeader";
import GetFile from "./GetFile";
import { useEffect } from "react";
import { useState } from "react";

function ClosetFeedView({ userId }) {
  const [isProfileImageUrl, setIsProfileImageUrl] = useState("");

  useEffect(() => {
    // async function getClothingItems() {
    //   const response = await GetFile(
    //     `http://localhost:8080/getClothingItemsOrderedByTime/${userId}`
    //   );
    //   console.log(response.data);
    // }
    // getClothingItems();
    async function getProfilePhoto() {
      const response = await GetFile(
        `http://localhost:8080/getProfilePhoto/${userId}`
      );
      setIsProfileImageUrl(response.data);
      console.log(response.data);
    }
    getProfilePhoto();
  }, []);

  return (
    <>
      <div className="closet-feed-view-container">
        <Browser>
          <FeedHeader
            profileImage={
              <img className="profile-photo-img" src={isProfileImageUrl}></img>
            }
            Username={"kwd2002"}
          />
          <div className="closet-feed-container">
            <div className="clothing-item-container"></div>
          </div>
        </Browser>
      </div>
    </>
  );
}

export default ClosetFeedView;
