import Footer from "@/components/Footer";
//import Navbar from "@/components/Navbar";

export default function MktCLayout({ children }) {
  return (
    <div>
      {/* <Navbar transparent={false} /> */}
      <main>{children}</main>
    </div>
  );
}
