import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";
import Socials from "./components/socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nico 💙",
  description: "Backend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mt-20 ml-10 mr-10">
          <Menu />
          {children}
          <Socials />
        </div>
      </body>
    </html>
  );
}
