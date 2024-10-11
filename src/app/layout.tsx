import "react-day-picker/dist/style.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import NavBar from "./components/ui/navbar";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HOME | TRAVERSE",
  description: "Home Page",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  // console.log(session, "main layout")
  return (
    <html lang="en">
      <Providers>
        <body className={jost.className}>
           {/* <NavBar session={session} /> */}
         
          {children}
        </body>
      </Providers>
    </html>
  );
}
