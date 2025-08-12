import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function MktALayout({
  children,
}) {
  return (
    <MaxWidthWrapper>
      <Navbar transparent={true}/>
      <main>{children}</main>
    </MaxWidthWrapper>
  );
}
