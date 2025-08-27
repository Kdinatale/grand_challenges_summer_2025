import Browser from "./Browser";
import FeedHeader from "./FeedHeader";
import GetFile from "./GetFile";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ClosetFeed.css";
import SaveIcon from "./assets/images/add_clothing_icon.png";

function ClosetFeedView({ userId }) {
  const [isProfileImageUrl, setIsProfileImageUrl] = useState("");
  const [isClothingItems, setIsClothingItems] = useState([]);
  const navigate = useNavigate();

  const handleClickAddClothingItem = () => {
    console.log("CLICK");
    navigate(`/addClothingItem/${userId}`, { viewTransition: true });
  };

  useEffect(() => {
    async function getClothingItems() {
      const response = await GetFile(
        `http://localhost:8080/getClothingItemsOrderedByTime/${userId}`
      );
      setIsClothingItems([SaveIcon].concat(response.data));
      console.log(response.data);
    }

    async function getProfilePhoto() {
      const response = await GetFile(
        `http://localhost:8080/getProfilePhoto/${userId}`
      );
      setIsProfileImageUrl(response.data);
      console.log(response.data);
    }
    getProfilePhoto();
    getClothingItems();
  }, []);

  return (
    <>
      <Browser>
        <div className="closet-feed-container">
          <FeedHeader
            profileImage={
              <img className="profile-photo-img" src={isProfileImageUrl}></img>
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
                <div key={index} id={className} className={className}>
                  <img src={clothingItem} alt={`Item ${index}`} />
                </div>
              );
            })}
          </div>
        </div>
      </Browser>
    </>
  );
}

export default ClosetFeedView;
