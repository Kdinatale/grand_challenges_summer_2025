import Browser from "./Browser.jsx";
import closedCloset from "./assets/images/closed_closet.png";
import "./styles/ProfilePage.css";
import pinkPin from "./assets/images/pink_pin.png";
function ProfilePage() {
  return (
    <>
      <Browser>
        <div className="profile-closet-container">
          <div className="profile-content-container">
            <div className="about-me-container">
              <div className="about-me-border">
                <div className="about-me">
                  <div className="profile-photo-template">
                    <div className="about-me-text-container"></div>
                    <div className="profile-photo-container">
                      <div className="profile-photo-border">
                        <div className="profile-photo-holder"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="favorite-clothing-container">
                <div className="clothing-image-1-container">
                  <div className="clothing-image-1"></div>
                </div>
                <div className="clothing-image-2-container">
                  <div className="clothing-image-2"></div>
                </div>
                <div className="clothing-image-3-container">
                  <div className="clothing-image-3"></div>
                </div>
                <div className="clothing-image-4-container">
                  <div className="clothing-image-4"></div>
                </div>
              </div>
            </div>
            <div className="favorite-brand-container">
              <div className="post-it-container">
                <div className="post-it-1-border">
                  <div className="post-it-1">
                    <div className="pin-container-1">
                      <img className="pin-1" src={pinkPin} alt="Pink pin"></img>
                    </div>
                  </div>
                </div>
                <div className="post-it-2-border">
                  <div className="post-it-2"></div>
                </div>

                <div className="post-it-3-border">
                  <div className="post-it-3">
                    <div className="pin-container-3">
                      <img className="pin-3" src={pinkPin} alt="Pink pin"></img>
                    </div>
                  </div>
                </div>
                <div class="post-it-4-border">
                  <div className="post-it-4">
                    <div className="pin-container-4">
                      <img className="pin-4" src={pinkPin} alt="Pink pin"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="closed-closet-container">
            <img
              className="closed-closet"
              src={closedCloset}
              alt="Closet with closed door"
            />
          </div>
        </div>
      </Browser>
    </>
  );
}
export default ProfilePage;
