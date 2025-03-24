"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import AnimatedLinks from "./AnimatedLinks";
import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { NAVLINKS } from "@/lib/constants";
import CustomLink from "./custom-ui/CustomLink";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-[50px] py-[15px] md:py-[23px] ${
        scrolled ? "bg-[#7f37de] shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Image
            src={"/logo.svg"}
            height={30}
            width={83}
            alt="propifix logo"
          />

          <nav className=" items-center space-x-10 flex">
            <ul className="gap-8 justify-center items-center w-fit hidden lg:flex">
              {NAVLINKS.map((link) => (
                <li>
                  <AnimatedLinks
                    className={"text-white capitalize font-medium text-[13px]"}
                    iconColor={"white"}
                  >
                    <CustomLink url={link.url}>{link.title}</CustomLink>
                  </AnimatedLinks>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <Button
                variant="outline"
                className="bg-transparent border text-white capitalize cursor-pointer "
                asChild
              >
                <Link href={"/register"}>get started</Link>
              </Button>
            </div>
            <div className="lg:hidden relative z-50">
              <Button
                variant={"ghost"}
                onClick={() => setIsOpen(!isOpen)}
                className="text-white py-3"
              >
                {isOpen ? (
                  <XIcon
                    size={24}
                    className="size-[25px]"
                  />
                ) : (
                  <MenuIcon
                    size={24}
                    className="size-[25px]"
                  />
                )}
              </Button>
            </div>
          </nav>

          <div
            className={`fixed inset-0 bg-purple-600 bg-opacity-95 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="container mx-auto px-4 py-40">
              <nav className="flex flex-col space-y-3 items-center">
                {NAVLINKS.map((link) => (
                  <AnimatedLinks
                    className={
                      "text-white capitalize font-medium text-lg hover:text-purple-200"
                    }
                    iconColor={"white"}
                  >
                    <CustomLink url={link.url}>{link.title}</CustomLink>
                  </AnimatedLinks>
                ))}
                <Button
                  variant="outline"
                  className="bg-transparent border text-white capitalize cursor-pointer "
                  asChild
                >
                  <Link href={"/register"}>get started</Link>
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
