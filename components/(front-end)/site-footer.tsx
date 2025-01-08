import React from "react";
import Logo from "../global/Logo";
import { Facebook, Twitter, Instagram, Github, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
          <div className="flex lg:flex-1">
        <img src="https://img.freepik.com/premium-vector/free-vector-gradient-ecommerce-logo-collection_1077315-9.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid" alt="" className="w-[40px] h-[40px] rounded-lg"/>
        </div>
            <p className="text-gray-400 text-sm">
              Ecommerce is for developers who want
              to save time and develop their saas apps faster
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Twitter} href="#" className="text-white"/>
              <SocialIcon Icon={Facebook} href="#" className="text-white"/>
              <SocialIcon Icon={Instagram} href="#" className="text-white"/>
              <SocialIcon Icon={Github} href="#" className="text-white"/>
            </div>
          </div>

          <FooterLinks title="Company" links={["About", "Features", "Works", "Career"]} />
          <FooterLinks title="Help" links={["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]} />
          <FooterLinks title="Ecommerce" links={["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]} />

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div> */}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Ecommerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, href }:any) => (
  <a
    href={href}
    className="bg-gray-100 p-2 rounded-full hover:bg-blue-100 transition duration-300"
  >
    <Icon size={20} />
  </a>
);

const FooterLinks = ({ title, links }:any) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link:any) => (
        <li key={link}>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;

