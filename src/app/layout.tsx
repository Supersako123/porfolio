import type { Metadata } from "next";
import { Inter, Montserrat  } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Sako",
  description: "Portfolio created by Jonathan Sako"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {children}
     
      </body>
      
    </html>
  );
}
