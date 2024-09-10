import type { Metadata } from "next";
import { Raleway } from 'next/font/google';
import "./globals.css";
import NavBar from "@/components/NavBar";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
});


export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased bg-black`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
