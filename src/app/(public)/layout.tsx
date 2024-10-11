import React from "react";
import NavBar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import { Jost } from "next/font/google";
const jost = Jost({ subsets: ["latin"] });
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
export default async function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <div className={jost.className}>
      <NavBar session={session} />
      {children}
      <Footer />
    </div>
  );
}
