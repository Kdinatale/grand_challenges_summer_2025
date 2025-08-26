import { Routes, Route } from "react-router-dom";
import ClosetFeedView from "./ClosetFeedView";
import ProfileViewManager from "./ProfileViewManager";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/closet"
          element={<ClosetFeedView userId="689151d2f2aaa40b4e1b2b2e" />}
        ></Route>
        <Route
          path="/profile"
          element={<ProfileViewManager userId="689151d2f2aaa40b4e1b2b2e" />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
