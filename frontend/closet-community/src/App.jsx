import { Routes, Route } from "react-router-dom";
import ClosetFeedView from "./ClosetFeedView";
import ProfileViewManager from "./ProfileViewManager";

function App() {
  return (
    <>
      <Routes>
        <Route path="/closet" element={<ClosetFeedView />}></Route>
        <Route path="/profile" element={<ProfileViewManager />}></Route>
      </Routes>
    </>
  );
}

export default App;
