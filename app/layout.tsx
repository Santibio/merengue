import type { Metadata } from "next";
import { Dancing_Script, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const fontDancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} bg-background `}>
        <div className="flex justify-center bg-foreground h-4" />
        <div className="flex justify-center">
          <Link href={"/"}>
            <h1
              className={`${fontDancingScript.className} text-primary text-4xl py-8 pb-20`}
            >
              Merengue
            </h1>
          </Link>
        </div>
        <div className="max-w-[1200px] m-auto">{children}</div>
      </body>
    </html>
  );
}
