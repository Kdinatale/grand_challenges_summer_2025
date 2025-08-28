import { useLocation } from "react-router-dom";
import Browser from "./Browser";
import "./styles/ViewPost.css";
import PostHeader from "./PostHeader";
import { useEffect } from "react";
import GetFile from "./GetFile";
import { useState } from "react";
import formatPostTime from "./TimeFormat";
import "nes.css/css/nes.min.css";
import HeartIcon from "./assets/images/heart_icon.png";

function ViewPost() {
  const [postCreatedAt, setPostCreatedAt] = useState(null);
  const [postCaption, setPostCaption] = useState("");
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const { userId, itemUrl, clothingItemId, profileImageUrl } = location.state;
  console.log(itemUrl);
  console.log(clothingItemId);

  useEffect(() => {
    async function getClothingInfo() {
      const getClothingInfoUrl = `http://localhost:8080/getClothingItem/${clothingItemId}`;
      const clothingResponse = await GetFile(getClothingInfoUrl);
      console.log("RESPONSE: ", clothingResponse.data);
      const formattedDate = formatPostTime(clothingResponse.data.time);
      setPostCreatedAt(formattedDate);

      console.log(clothingResponse.data.caption);
      setPostCaption(clothingResponse.data.caption);

      const getUserInfoUrl = `http://localhost:8080/getUserName/${userId}`;

      const userNameResponse = await GetFile(getUserInfoUrl);
      console.log(userNameResponse.data);
      setUserName(userNameResponse.data);
    }
    getClothingInfo();
  }, []);
  return (
    <>
      <Browser
        children={
          <>
            <div className="individual-post-page-container">
              <div className="post-border">
                <PostHeader
                  profileImageUrl={profileImageUrl}
                  username={userName}
                />
                <div className="clothing-image-container">
                  <div className="post-box">
                    <img className="clothingItemImage" src={itemUrl}></img>
                  </div>
                </div>
                <div className="message-container">
                  <div className="post-meta-data-container">
                    <div className="like-icon-container">
                      <img src={HeartIcon} className="heart-icon"></img>
                    </div>
                    <p>posted {postCreatedAt}</p>
                  </div>
                  <div className="comment-container">
                    <div className="caption-username-container">
                      <div className="username-container">
                        <p className="username">{userName}</p>
                      </div>
                      <div className="caption-container">
                        <p className="caption">{postCaption}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
        rightUrl={`/closet/${userId}`}
      />
    </>
  );
}
export default ViewPost;
