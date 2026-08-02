import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Mehadi Hasan | Virtual Assistant & Community Manager",

  description:
    "Professional Virtual Assistant, Community Manager, Data Researcher and Accounts & Finance Professional with 14+ years of experience.",

  keywords: [
    "Md Mehadi Hasan",
    "Virtual Assistant",
    "Community Manager",
    "Data Researcher",
    "Lead Generation",
    "Web Research",
    "Portfolio",
    "Bangladesh",
  ],

  authors: [
    {
      name: "Md Mehadi Hasan",
    },
  ],

  creator: "Md Mehadi Hasan",

  openGraph: {
    title: "Md Mehadi Hasan | Portfolio",
    description:
      "Professional Virtual Assistant, Community Manager & Data Researcher.",
    url: "https://portfolio-csic.vercel.app",
    siteName: "Md Mehadi Hasan Portfolio",
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}