"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";

const CustomLink = ({ url, children, className = "" }) => {
  const pathname = usePathname();
  const router = useRouter();

  if (!url) return null;

  const isInternal = url.startsWith("/");
  const isScrollLink = !isInternal && pathname === "/";

  const handleClick = (e) => {
    e.preventDefault();

    if (url === "#") return;

    if (isInternal) {
      // Navigate to internal page manually
      router.push(url);
    } else {
      // Navigate to homepage and scroll
      router.push(`/?scrollTo=${url}`);
    }
  };

  // Scroll behavior on homepage load
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

  // If you're on the homepage and scrolling to section
  if (isScrollLink) {
    return (
      <ScrollLink
        to={url}
        offset={-80}
        className={className}
        smooth={true}
        duration={500}
      >
        {children}
      </ScrollLink>
    );
  }

 
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default CustomLink;
