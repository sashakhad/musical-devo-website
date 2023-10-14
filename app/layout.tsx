import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const railway = Raleway({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musical Devotional",
  description: "A Bahá'í Inspired Event",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-t from-[#FF7B7B] from-10% to-[#FDEFFA] ${railway.className}`}
      >
        {children}
      </body>
    </html>
  );
}
