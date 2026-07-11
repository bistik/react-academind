import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function loader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
  return null;
}

export function getTokenDuration() {
  const expiration = localStorage.getItem("expiraiton");
  const expirationDate = new Date(storedExpirationDate);
  const now = Date();

  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
