import "./styles/PostModal.css";
import photoIcon from "./assets/images/missing_photo_icon.png";
// import cancelButton from "./assets/images/cancel_button.png";
// import postButton from "./assets/images/post_button.png";
import selectPhoto from "./assets/images/select_photo.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import UploadFile from "./UploadFile";

function PostModal({ url }) {
  const [postCaption, setPostCaption] = useState("");
  const [postImageURL, setPostImageURL] = useState(photoIcon);
  const fileInputRef = useRef();
  const { userId } = useParams();

  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate(`/closet/${userId}`);
  };
  const post = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log("FORM DATA: " + formData);
    const file = fileInputRef.current.files[0];
    formData.append("image", file);
    formData.append("caption", postCaption);
    console.log("CAPTION " + formData.get("caption"));
    console.log("IMAGE" + formData.get("image"));
    const response = await UploadFile(formData, url);
    console.log(response);
    navigate(`/closet/${userId}`);
  };

  function storePostImage() {
    const file = fileInputRef.current.files[0];
    const image_url = URL.createObjectURL(file);
    setPostImageURL(image_url);
  }

  return (
    <>
      <div className="post-container">
        <div className="modal-container-border">
          <div className="modal-container">
            <form className="modal-container-form" onSubmit={post}>
              <div className="upper-modal-container">
                <div className="image-button-container">
                  <div className="image-section">
                    <div className="image-container-border">
                      <div className="image-container">
                        <img className="photo-icon" src={postImageURL}></img>
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
                  <input
                    type="file"
                    id="img-upload"
                    className="img-upload"
                    name="post-img"
                    ref={fileInputRef}
                    onChange={storePostImage}
                  ></input>

                  <textarea
                    name="caption-text-box"
                    id="caption-box"
                    placeholder="Share a message with friends ..."
                    className="caption-text-box"
                    value={postCaption}
                    onChange={(e) => setPostCaption(e.target.value)}
                  ></textarea>
                </div>
                <div className="button-section-container">
                  <div className="button-container">
                    <button
                      onClick={handleCancelClick}
                      className="cancel-button"
                    >
                      <p>Cancel</p>
                    </button>
                    <button className="post-button" type="submit">
                      <p>Post</p>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostModal;
