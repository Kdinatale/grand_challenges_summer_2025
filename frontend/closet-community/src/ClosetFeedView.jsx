import Browser from "./Browser";
import FeedHeader from "./FeedHeader";
import { getFile } from "./GetFile";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/ClosetFeed.css";
import SaveIcon from "./assets/images/add_clothing_icon.png";

function ClosetFeedView() {
  const [isProfileImageUrl, setIsProfileImageUrl] = useState("");
  const [isClothingItems, setIsClothingItems] = useState([]);
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleClickAddClothingItem = () => {
    console.log("CLICK");
    navigate(`/addClothingItem/`, { viewTransition: true });
  };

  const handleIndividualClothingView = (clothingItem) => {
    navigate(`/viewClothingItem/`, {
      state: {
        userId: userId,
        itemUrl: clothingItem.itemUrl,
        clothingItemId: clothingItem.id,
        profileImageUrl: isProfileImageUrl,
      },
    });
  };

  useEffect(() => {
    async function load() {
      const profileData = await getFile(
        `http://localhost:8080/getProfilePhoto/`
      );
      console.log("Profile Photo Data: ", profileData);
      setIsProfileImageUrl(profileData);

      const clothingData = await getFile(
        `http://localhost:8080/getClothingItemsOrderedByTime/`
      );
      console.log("Clothing Data: ", clothingData);
      setIsClothingItems(clothingData);
    }
    load();
  }, []);

  return (
    <>
      <Browser
        children={
          <div className="closet-feed-container">
            <FeedHeader
              profileImage={
                <img
                  className="profile-photo-img"
                  src={isProfileImageUrl}
                ></img>
              }
              Username={"kwd2002"}
            />
            <div className="clothing-item-container">
              {isClothingItems.map((clothingItem, index) => {
                const isAddIcon = index === 0;
                const className = isAddIcon
                  ? "closet-feed-item closet-feed-item-add-icon"
                  : "closet-feed-item";
                return isAddIcon ? (
                  <div
                    key={index}
                    id={className}
                    className={className}
                    onClick={handleClickAddClothingItem}
                  >
                    <img src={clothingItem} alt={`Item ${index}`} />
                  </div>
                ) : (
                  <div
                    key={index}
                    id={className}
                    className={className}
                    onClick={() => handleIndividualClothingView(clothingItem)}
                  >
                    <img src={clothingItem.itemUrl} alt={`Item ${index}`} />
                    <div className="view-box">
                      <p className="view-text">View</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
        rightUrl={"/profile/"}
      />
    </>
  );
}

export default ClosetFeedView;
