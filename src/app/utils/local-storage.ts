import { removeUserInfo } from "../services/auth.services";
import { decodedToken } from "./jwt";

export const setToLocalStorage = (key: string, token: string) => {
  console.log(token);
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(key);
};
