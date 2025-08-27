import "./styles/PostModal.css";
import photoIcon from "./assets/images/missing_photo_icon.png";
// import cancelButton from "./assets/images/cancel_button.png";
// import postButton from "./assets/images/post_button.png";
import selectPhoto from "./assets/images/select_photo.png";
import { useNavigate } from "react-router-dom";

function PostModal({ userId }) {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate(`/closet/${userId}`);
  };
  const postClothingItem = () => {};
  return (
    <>
      <div className="post-container">
        <div className="modal-container-border">
          <div className="modal-container">
            <form className="modal-container-form" action={postClothingItem}>
              <div className="upper-modal-container">
                <div className="image-button-container">
                  <div className="image-section">
                    <div className="image-container-border">
                      <div className="image-container">
                        <img className="photo-icon" src={photoIcon}></img>
                      </div>
                    </div>
                  </div>
                  <div className="select-photo-button-container">
                    <label htmlFor="img-upload" className="image-upload-label">
                      <img
                        className="select-photo-image"
                        src={selectPhoto}
                      ></img>
                    </label>
                  </div>
                </div>
              </div>
              <div className="lower-modal-container">
                <div className="caption-text-box-container">
                  <div className="caption-label-container">
                    <label className="caption-label" htmlFor="caption-box">
                      Caption:
                    </label>
                  </div>
                  <textarea
                    id="caption-box"
                    placeholder="Share a message with friends ..."
                    className="caption-text-box"
                  ></textarea>
                </div>
                <div className="button-section-container">
                  <div className="button-container">
                    <button
                      onClick={handleCancelClick}
                      className="cancel-button"
                      type="submit"
                    >
                      <p>Cancel</p>
                    </button>
                    <button className="post-button" type="submit">
                      <p>Post</p>
                    </button>
                  </div>
                </div>
              </div>
              <input type="file" id="img-upload" className="img-upload"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostModal;
