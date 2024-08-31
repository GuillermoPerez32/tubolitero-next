import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { currentYear } from "@/lib/constants/dates";
import { AppContextProvider } from "@/components/AppContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Tu Bolitero ${currentYear}`,
  description:
    "Resultados de lotería bolita charada Venezuela, Florida, Miami, Haití, Haiti, New York, Georgia",
  keywords:
    "lotería, tirada, charada, bolita, haiti, cuba, florida, georgia, new york, hoy, miami",
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
    },
    {
      url: "/favicon.ico",
      rel: "shortcut icon",
      type: "image/x-icon",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
