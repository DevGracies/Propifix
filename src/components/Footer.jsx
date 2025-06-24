import React from "react";
import { MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import { FOOTERLINKS, NAVLINKS, SOCIALLINKS } from "@/lib/constants";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import CustomLink from "./custom-ui/CustomLink";
const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-br from-[#9747FF] to-[#5D14AD]
 text-white pt-16"
    >
      <div className="max-w-[1200px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-14 px-5 md:px-[72px]">
          {/* Company Info Column */}
          <div className=" col-span-2 flex gap-3">
            <div className="space-y-4">
              <Image
                src="/logo.svg"
                height={30}
                width={83}
                alt="PropiFix Logo"
                className="mb-4"
              />
              <p className="text-[15px] leading-relaxed opacity-90">
                Propifix is an innovative company and brand that transforms real
                estate and artisan services by delivering customer-centric,
                affordable, and seamless solutions. Our commitnment is to make
                life easier for our clients.—ensuring that whenever they need
                our services, they can access them effortlessly and affordably.
              </p>
              <div className="space-y-1 text-[15px]">
                <p>+234 801 378 9820</p>
                <p>support@propifix.com</p>
                <p>Propifix HQ, Noja, Lagos, Nigeria</p>
              </div>
              {/* Social Media Icons */}
              <div className="pt-4 w-full md:flex justify-between items-center gap-5">
                <div className="flex space-x-4 ">
                  {SOCIALLINKS.map((link, i) => (
                    <Button
                      className={"rounded-full bg-white hover:bg-white/60"}
                      asChild
                    >
                      <Link href={link.ref}>
                        <Image
                          src={link.icon}
                          width={15}
                          height={15}
                          alt={link.title}
                        />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Quick Links Column */}
          <div className="flex gap-3">
            <div>
              <h3 className="text-[20px] font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {FOOTERLINKS.quickLinks.map((link, index) => (
                  <li key={index}>
                    <CustomLink
                      url={link.url}
                      className="text-[14px] hover:opacity-80 transition-opacity capitalize cursor-pointer"
                    >
                      {link.title}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Services Column */}
          <div>
            <h3 className="text-[20px] font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {FOOTERLINKS.services.map((link, index) => (
                <li key={index}>
                  <CustomLink
                    url={link.url}
                    className="text-[14px] hover:opacity-80 transition-opacity capitalize cursor-pointer"
                  >
                    {link.title}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal Links Column */}
          <div>
            <h3 className="text-[20px] font-semibold mb-4">Legal Links</h3>
            <ul className="space-y-2">
              {FOOTERLINKS.legalLinks.map((link, index) => (
              <li key={index}>
                <CustomLink
                  url={link.url}
                  className="text-[14px] hover:opacity-80 transition-opacity capitalize cursor-pointer"
                >
                  {link.title}
                </CustomLink>
              </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 py-4 border-t border-[#5D14AD] px-[50px] bg-[#5D14AD]">
        <Button className="cursor-pointer flex items-center space-x-2 bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors mb-4 md:mb-0">
          <MessageCircleIcon size={20} />
          <span>Customer Care</span>
        </Button>
        <p className="text-sm opacity-90">
          © 2024 PropiFix. All rights reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
