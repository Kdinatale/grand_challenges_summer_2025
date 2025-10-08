import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Test() {
  const { user, isAuthenticated } = useAuth0();

  console.log(user);
  return (
    <>
      <div>
        {isAuthenticated && (
          <div>
            <LogoutButton />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.sub}</p>
          </div>
        )}
      </div>
    </>
  );
}
export default Test;
