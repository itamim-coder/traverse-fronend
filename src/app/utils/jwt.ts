import { jwtDecode } from "jwt-decode";
import { removeUserInfo } from "../services/auth.services";
import { authKey } from "@/constants/storageKey";

export const decodedToken = (token: string) => {
  console.log("decode", token);
  if (token == "undefined") {
    removeUserInfo(authKey);
    // router.refresh();
  }
  return jwtDecode(token);
};
