import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function AuthLayout({ children }) {
  return (
    <div
      className={`${poppins.className} antialiased user_auth_bg h-screen overflow-auto`}
    >
      <main className="m-[2rem]">{children}</main>
    </div>
  );
}
