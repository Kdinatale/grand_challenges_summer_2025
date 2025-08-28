// import { useState } from "react";
import "./styles/CreatePost.css";
import Browser from "./Browser";
import PostModal from "./PostModal";

function CreatePost({ userId }) {
  const customUrl = `http://localhost:8080/postClothingItem/${userId}`;
  return (
    <>
      <Browser
        children={<PostModal url={customUrl} />}
        rightUrl={`/closet/${userId}`}
      />
    </>
  );
}
export default CreatePost;
