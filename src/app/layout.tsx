import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Configure Dancing Script font
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script", // Define a CSS variable
});

export const metadata: Metadata = {
  title: "Pascal info Management Dashboard",
  description: "Management System for Centre Polyvalent Pascal info",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancingScript.variable}`}>
        {children}
      </body>
    </html>
  );
}