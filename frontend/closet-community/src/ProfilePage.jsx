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
            </div>
            <div class="favorite-brand-container">
              <div class="post-it-container">
                <div class="post-it-1">
                  <div className="pin-container-1">
                    <img className="pin-1" src={pinkPin} alt="Pink pin"></img>
                  </div>
                </div>
                <div class="post-it-2">
                  {/* <div className="pin-container-2">
                    <img className="pin-2" src={pinkPin} alt="Pink pin"></img>
                  </div> */}
                </div>
                <div class="post-it-3">
                  <div className="pin-container-3">
                    <img className="pin-3" src={pinkPin} alt="Pink pin"></img>
                  </div>
                </div>
                <div class="post-it-4">
                  <div className="pin-container-4">
                    <img className="pin-4" src={pinkPin} alt="Pink pin"></img>
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
