import { Routes, Route } from "react-router-dom";
import ClosetFeedView from "./ClosetFeedView";
import ProfileViewManager from "./ProfileViewManager";
import CreatePost from "./CreatePost";
import ViewPost from "./viewPost";
import Home from "./Home";
import { useAccessToken } from "./useAccessToken";
import { useEffect } from "react";

function App() {
  const getToken = useAccessToken();

  useEffect(() => {
    const getTokenAndStorage = async () => {
      const token = await getToken();
      if (!token) return;
      localStorage.setItem("token", token);
      console.log("Token: ", localStorage.getItem("token"));
    };

    getTokenAndStorage();
  }, [getToken]);

  return (
    <>
      <Routes>
        <Route path="/closet/" element={<ClosetFeedView />}></Route>
        <Route path="/addClothingItem/" element={<CreatePost />}></Route>
        <Route path="/viewClothingItem/" element={<ViewPost />}></Route>
        <Route path="/profile" element={<ProfileViewManager />}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
