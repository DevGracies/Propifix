import Footer from "@/components/Footer";

export default function HomeLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
