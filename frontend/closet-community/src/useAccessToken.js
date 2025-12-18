import { useAuth0 } from "@auth0/auth0-react";

export function useAccessToken() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const getToken = async () => {
    if (!isAuthenticated) return null;

    try {
      return await getAccessTokenSilently({
        audience: "https://api.closetcommunity.com",
        scope: "openid profile email",
      });
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log("Audience:", payload.aud);
    } catch (error) {
      console.error("Error getting token ", error);
      return null;
    }
  };
  return getToken;
}
