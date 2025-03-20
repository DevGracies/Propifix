import Navbar from "@/components/Navbar";

export default function HomeLayout({
  children,
}) {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
    </div>
  );
}
