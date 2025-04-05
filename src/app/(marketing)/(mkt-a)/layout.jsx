import Navbar from "@/components/Navbar";

export default function MktALayout({
  children,
}) {
  return (
    <div>
      <Navbar transparent={true}/>
      <main>{children}</main>
    </div>
  );
}
