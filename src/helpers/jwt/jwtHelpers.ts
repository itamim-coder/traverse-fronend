import jwt, { JwtPayload, Secret } from "jsonwebtoken";

const verifyToken = (token: string, secret: Secret) => {
  try {
    // console.log("Verifying token...");
    const decoded = jwt.verify(token, secret);
    console.log("Token verified successfully:", decoded);
    return decoded;  // Return decoded payload if successful
  } catch (error: any) {
    // console.error("JWT verification error:", error.message || error);
    return null;  // Return null if verification fails
  }
};

export const jwtHelpers = { verifyToken };
