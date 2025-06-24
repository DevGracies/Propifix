"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";

const CustomLink = ({ url, children, className = "" }) => {
  const pathname = usePathname();
  const router = useRouter();

  if (!url) return null;

  const isInternal = url.startsWith("/");

  const handleClick = (e) => {
    if (url === "#") {
      e.preventDefault();
      return;
    }

    if (!isInternal && pathname !== "/") {
      e.preventDefault();
      router.push(`/?scrollTo=${url}`);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const scrollTo = searchParams.get("scrollTo");

    if (pathname === "/" && scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80,
      });

      const newUrl = window.location.pathname;
      window.history.replaceState({}, "", newUrl);
    }
  }, [pathname]);


  if (isInternal) {
    return (
      <Link
        href={url}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return pathname === "/" ? (
    <ScrollLink
      to={url}
      offset={-80}
      className={className}
      smooth={true}
      duration={500}
      onClick={handleClick}
    >
      {children}
    </ScrollLink>
  ) : (
    <a
      href="#"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};

export default CustomLink;
