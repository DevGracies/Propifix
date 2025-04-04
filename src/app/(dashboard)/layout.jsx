import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function DashboardLayout({ children }) {
  return (
    <div className={`${poppins.variable} antialiased`}>
      <nav>Dashboard Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
