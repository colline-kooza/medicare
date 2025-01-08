import Footer from "@/components/(front-end)/site-footer";
import Header from "@/components/Header";
import React, { ReactNode } from "react";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className=" w-full lg:max-w-[1400px] min-h-screen mx-auto flex flex-col ">
      <Header />
      <div>
        {children}
      </div>
      <div className="mt-8">
      <Footer/>
      </div>
    </div>
  );
}
