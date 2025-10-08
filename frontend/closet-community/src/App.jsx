import { Routes, Route } from "react-router-dom";
import ClosetFeedView from "./ClosetFeedView";
import ProfileViewManager from "./ProfileViewManager";
import Home from "./Home";
import Test from "./Test";
function App() {
  return (
    <>
      <Routes>
        <Route path="/closet" element={<ClosetFeedView />}></Route>
        {/* <Route
          path="/profile"
          element={<ProfileViewManager userId="689151d2f2aaa40b4e1b2b2e" />}
        ></Route> */}
        <Route path="/test" element={<ProfileViewManager />}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/test" element={<Test></Test>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
