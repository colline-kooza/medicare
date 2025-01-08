"use client";
import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/generateInitials";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Logo from "@/components/global/Logo";
import AuthenticatedAvatar from "@/components/global/AuthenticatedAvatar";
import { ModeToggle } from "../mode-toggle";

export default function SiteHeader({ session }: { session: Session | null }) {
  const navigation = [
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/solutions" },
  
  ];
  const router = useRouter();
  async function handleLogout() {
    try {
      await signOut();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky inset-x-0 top-0 lg:top-0 z-50 backdrop-blur-sm ">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
        <img src="https://img.freepik.com/premium-vector/free-vector-gradient-ecommerce-logo-collection_1077315-9.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid" alt="" className="w-[40px] h-[40px] rounded-lg"/>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon aria-hidden="true" className="h-6 w-6" /> */}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-2">
          <ModeToggle />
          {session ? (
            <AuthenticatedAvatar session={session} />
          ) : (
            <Button asChild variant={"outline"}>
              <Link href="/login">Log in</Link>
            </Button>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo href="/" labelShown={true} title="Next Starter Pro" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              {/* <XMarkIcon aria-hidden="true" className="h-6 w-6" /> */}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {session ? (
                  <Button asChild variant={"ghost"}>
                    <Link href="/dashboard">
                      <Avatar>
                        <AvatarImage
                          src={session?.user?.image ?? ""}
                          alt={session?.user?.name ?? ""}
                        />
                        <AvatarFallback>
                          {getInitials(session?.user?.name)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="ml-3">Dashboard</span>
                    </Link>
                  </Button>
                ) : (
                  <Button asChild variant={"outline"}>
                    <Link href="/login">Log in</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
