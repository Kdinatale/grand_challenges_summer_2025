import { Routes, Route } from "react-router-dom";
import ViewProfilePage from "./ViewProfilePage";
import ClosetFeedView from "./ClosetFeedView";
import EditProfilePage from "./EditProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<ViewProfilePage />}></Route>
        <Route path="/closet" element={<ClosetFeedView />}></Route>
        <Route path="/editProfile" element={<EditProfilePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
