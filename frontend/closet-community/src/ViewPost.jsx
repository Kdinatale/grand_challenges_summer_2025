import { useLocation } from "react-router-dom";
import Browser from "./Browser";
import "./styles/ViewPost.css";
import PostHeader from "./PostHeader";
import { useEffect } from "react";
import GetFile from "./GetFile";
import { useState } from "react";
import formatPostTime from "./TimeFormat";

function ViewPost() {
  const [postCreatedAt, setPostCreatedAt] = useState(null);
  const [postCaption, setPostCaption] = useState("");
  const location = useLocation();
  const { userId, itemUrl, clothingItemId, profileImageUrl } = location.state;
  console.log(itemUrl);
  console.log(clothingItemId);

  useEffect(() => {
    async function getClothingInfo() {
      const url = `http://localhost:8080/getClothingItem/${clothingItemId}`;
      const response = await GetFile(url);
      console.log("RESPONSE: ", response.data);
      const formattedDate = formatPostTime(response.data.time);
      setPostCreatedAt(formattedDate);

      console.log(response.data.caption);
      setPostCaption(response.data.caption);
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
                <PostHeader profileImageUrl={profileImageUrl} username={""} />
                <div className="clothing-image-container">
                  <div className="post-box">
                    <img className="clothingItemImage" src={itemUrl}></img>
                  </div>
                </div>
                <div className="message-container">
                  <div className="post-meta-data-container">
                    <p>posted {postCreatedAt}</p>
                  </div>
                  <div className="comment-container">
                    <p className="caption">{postCaption}</p>
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
