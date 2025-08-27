// import { useState } from "react";
import "./styles/CreatePost.css";
import Browser from "./Browser";
import PostModal from "./PostModal";

function CreatePost({ userId }) {
  return (
    <>
      <Browser>
        <PostModal>userId = {userId}</PostModal>
      </Browser>
    </>
  );
}
export default CreatePost;
