
import Footer from "@/components/(front-end)/site-footer";
import SiteHeader from "@/components/(front-end)/site-header";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const session = null;
  return (
    <div className="bg-white">
      <SiteHeader session={session} />
      <div className="relative isolate px-6 pt-1 lg:px-8 flex flex-col items-center justify-center">
        {children}
        <Footer />
      </div>
    </div>
  );
}
