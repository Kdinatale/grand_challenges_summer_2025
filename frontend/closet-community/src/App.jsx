import { Routes, Route } from "react-router-dom";
import ViewProfilePage from "./ViewProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<ViewProfilePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
