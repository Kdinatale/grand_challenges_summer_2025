import Browser from "./Browser.jsx";

import { useState } from "react";
import closedCloset from "./assets/images/closed_closet.png";
import openCloset from "./assets/images/open_closet.png";
import { useNavigate } from "react-router-dom";
import "./styles/ProfilePage.css";
import pinkPin from "./assets/images/pink_pin.png";
function ProfilePage({
  profilePhoto,
  clothingItemOne,
  clothingItemTwo,
  clothingItemThree,
  clothingItemFour,
  iconImage,
  userId,
}) {
  const [isClosetHovered, setIsClosetHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsClosetHovered(true);
  };

  const handMouseLeave = () => {
    if (!isClicked) {
      setIsClosetHovered(false);
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClickOkayButton = () => {
    navigate(`/closet/${userId}`, { viewTransition: true });
  };

  const handleClickLaterButton = () => {
    setIsClosetHovered(false);
  };

  return (
    <>
      <Browser
        children={
          <div className="profile-closet-container">
            <div className="profile-content-container">
              <div className="about-me-container">
                <div className="about-me-border">
                  <div className="about-me">
                    <div className="about-me-first-half">
                      <div className="profile-photo-template">
                        <div className="about-me-text-container"></div>
                        <div className="profile-photo-container">
                          <div className="profile-photo-border">
                            <div className="profile-photo-holder">
                              {profilePhoto}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about-me-second-half">
                      <div className="icon-container">{iconImage}</div>
                    </div>
                  </div>
                </div>
                <div className="favorite-clothing-container">
                  <div className="clothing-image-1-container">
                    <div className="clothing-image-1">{clothingItemOne}</div>
                  </div>
                  <div className="clothing-image-2-container">
                    <div className="clothing-image-2">{clothingItemTwo}</div>
                  </div>
                  <div className="clothing-image-3-container">
                    <div className="clothing-image-3">{clothingItemThree}</div>
                  </div>
                  <div className="clothing-image-4-container">
                    <div className="clothing-image-4"> {clothingItemFour}</div>
                  </div>
                </div>
              </div>
              <div className="favorite-brand-container">
                <div className="post-it-container">
                  <div className="post-it-1-border">
                    <div className="post-it-1">
                      <div className="pin-container-1">
                        <img
                          className="pin-1"
                          src={pinkPin}
                          alt="Pink pin"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="post-it-2-border">
                    <div className="post-it-2"></div>
                  </div>

                  <div className="post-it-3-border">
                    <div className="post-it-3">
                      <div className="pin-container-3">
                        <img
                          className="pin-3"
                          src={pinkPin}
                          alt="Pink pin"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="post-it-4-border">
                    <div className="post-it-4">
                      <div className="pin-container-4">
                        <img
                          className="pin-4"
                          src={pinkPin}
                          alt="Pink pin"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="closet-section">
              <div className="enter-closet-prompt-container">
                {isClosetHovered && (
                  <div className="enter-closet-prompt-box">
                    <div className="prompt-box-header"></div>
                    <div className="prompt-box-content">
                      <div className="prompt-message">
                        <p className="message-text">check out my closet :)</p>
                      </div>
                      <div className="buttons-container">
                        <div
                          onClick={handleClickOkayButton}
                          className="ok-button-container"
                        >
                          <p className="ok-text">ok!</p>
                        </div>
                        <div
                          onClick={handleClickLaterButton}
                          className="later-button-container"
                        >
                          <p className="later-text">later!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {isClosetHovered ? (
                <div className="open-closet-container">
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handMouseLeave}
                    className="open-closet"
                    onClick={handleClick}
                  >
                    <img
                      className="open-closet-img"
                      src={openCloset}
                      alt="Image of a double door, green closet with the right door open."
                    ></img>
                  </div>
                </div>
              ) : (
                <div className="closed-closet-container">
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handMouseLeave}
                    className="closed-closet"
                  >
                    <img
                      className="closed-closet-img"
                      src={closedCloset}
                      alt="Image of a double door, green closet with both doors closed."
                    ></img>
                  </div>
                </div>
              )}
            </div>
          </div>
        }
        rightUrl={""}
      />
    </>
  );
}
export default ProfilePage;
