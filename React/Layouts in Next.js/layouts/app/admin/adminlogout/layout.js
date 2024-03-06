import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Logout",
  description: "Admin page : facebook is the largest online social network",
};

export default function AdminLayout({ children }) {
  return (
    <>
        <span>Logout Navbar</span>
        {children}

    </>
  );
}
