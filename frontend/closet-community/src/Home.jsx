// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

function Home() {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect({ redirectUri: "http://localhost:5173/test" });
  }, []);

  return <></>;
}
export default Home;
