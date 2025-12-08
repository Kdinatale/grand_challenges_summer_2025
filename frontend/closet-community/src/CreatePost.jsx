// import { useState } from "react";
import "./styles/CreatePost.css";
import Browser from "./Browser";
import PostModal from "./PostModal";

function CreatePost() {
  const customUrl = `http://localhost:8080/postClothingItem/`;
  return (
    <>
      <Browser children={<PostModal url={customUrl} />} rightUrl={`/closet/`} />
    </>
  );
}
export default CreatePost;
