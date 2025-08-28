import { Routes, Route } from "react-router-dom";
import ClosetFeedView from "./ClosetFeedView";
import ProfileViewManager from "./ProfileViewManager";
import CreatePost from "./CreatePost";
import ViewPost from "./viewPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/closet/:userId" element={<ClosetFeedView />}></Route>
        <Route
          path="/profile/"
          element={<ProfileViewManager userId="689151d2f2aaa40b4e1b2b2e" />}
        ></Route>
        <Route
          path="/addClothingItem/:userId"
          element={<CreatePost userId="689151d2f2aaa40b4e1b2b2e" />}
        ></Route>
        <Route
          path="/viewClothingItem/"
          element={<ViewPost userId="689151d2f2aaa40b4e1b2b2e" />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
