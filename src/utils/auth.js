export const isAuthenticated = () => {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((row) => row.startsWith("auth=true"));
};
