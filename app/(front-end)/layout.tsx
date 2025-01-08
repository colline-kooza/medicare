import Footer from "@/components/(front-end)/site-footer";
import { SiteHeader } from "@/components/(front-end)/site-header";
import Header from "@/components/Header";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
    const session = await getServerSession(authOptions);
  
  return (
    <div className=" w-full lg:max-w-[1400px] min-h-screen mx-auto flex flex-col ">
      <SiteHeader session={session} />
      <div>
        {children}
      </div>
      <div className="mt-8">
      <Footer/>
      </div>
    </div>
  );
}
