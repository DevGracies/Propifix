'use client'
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const CustomLink = ({ url, children, className = "" }) => {
  if (!url) return null;

  return url.startsWith("/") ? (
    <Link href={url} className={className}>{children}</Link>
  ) : (
    <ScrollLink
        to={url}
        offset={-80}
        className={className}
        onClick={(e) => {
          if (url === "#") {
            e.preventDefault();
          }
        }}
    >
      {children}
    </ScrollLink>
  );
};

export default CustomLink;
