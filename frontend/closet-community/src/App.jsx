import { Routes, Route } from "react-router-dom";
import ViewProfilePage from "./ViewProfilePage";
import ClosetFeedView from "./ClosetFeedView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<ViewProfilePage />}></Route>
        <Route path="/closet" element={<ClosetFeedView />}></Route>
      </Routes>
    </>
  );
}

export default App;
