import { getSession } from "next-auth/react";

export const getAccessToken = async () => {
  const session = await getSession(); // Fetch the NextAuth session
  console.log(session);
  return session?.data?.accessToken; // Return the access token
};
