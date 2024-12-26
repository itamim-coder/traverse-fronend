import { getNewAccessToken, storeUserInfo } from "@/app/services/auth.services";
import { jwtHelpers } from "@/helpers/jwt/jwtHelpers";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      if (account.provider === "google") {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google-signin`,
            {
              method: "POST",
              body: JSON.stringify(user),
              headers: { "Content-Type": "application/json" },
            }
          );
          console.log("-----------------------start---------------------");
          // console.log(res, "response");

          const { data } = await res.json();
          const verifiedToken: any = jwtHelpers.verifyToken(
            data?.accessToken,
            process.env.JWT_SECRET!
          );
          console.log(data, "data auth option");
          console.log(verifiedToken, "verified token");

          const modify = {
            ...data,
            ...verifiedToken,
          };
          user.data = modify;
          console.log("modify", modify);
          // return {
          //   ...data,
          //   ...verifiedToken,
          // };
          // storeUserInfo({ accessToken: modify?.data?.accessToken });
          return user;
        } catch (error: any) {
          console.log(error);
          throw new Error(error.message);
        }
      }
      // console.log(user, "user without if block");
      return user;
    },

    async jwt({ token, user, account }) {
      // If it's the first time the token is created, add the accessToken and refreshToken
      // if (account) {
      //   token.accessToken = user?.accessToken;
      //   token.refreshToken = user?.refreshToken;
      // }
      console.log(token, "token auth option");
      console.log(user, "user auth option");
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }: { session: any; token: any }) {
      console.log(session, "session auth option");
      console.log(token, "token auth option inside session");
      const verifiedToken = jwtHelpers.verifyToken(
        token?.data.accessToken,
        process.env.JWT_SECRET!
      );
      console.log("verified token auth option", verifiedToken);
      if (!verifiedToken) {
        console.log("token expired so new token generated");
        const { data } = await getNewAccessToken();
        token.accessToken = data?.accessToken;
      }
      console.log("-----------------------end---------------------");
      return {
        ...session,
        ...token,
      };
    },
  },

  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
