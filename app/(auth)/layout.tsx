
import Footer from "@/components/(front-end)/site-footer";
import { SiteHeader } from "@/components/(front-end)/site-header";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function HomeLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <>
      <SiteHeader session={session} />
      <div>
        {children}
        <div className="mt-8">
        <Footer/>
      </div>
      </div>
    </>
  );
}
