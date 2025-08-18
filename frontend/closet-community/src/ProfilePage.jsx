import Browser from "./Browser.jsx";
import closedCloset from "./assets/images/closed_closet.png";
import "./styles/ProfilePage.css";

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
