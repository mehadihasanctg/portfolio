import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mehadihasan-portfolio.vercel.app"),

  title: {
    default: "Md Mehadi Hasan | Virtual Assistant & Community Manager",
    template: "%s | Md Mehadi Hasan",
  },

  description:
    "Professional Virtual Assistant, Community Manager, Lead Generation Specialist, and Accounts & Finance Professional with 14+ years of experience helping businesses grow through reliable remote support.",

  keywords: [
    "Md Mehadi Hasan",
    "Virtual Assistant",
    "Community Manager",
    "Lead Generation",
    "Web Research",
    "CRM Management",
    "Data Entry",
    "Accounts and Finance",
    "Bangladesh",
    "Remote Virtual Assistant",
  ],

  authors: [
    {
      name: "Md Mehadi Hasan",
      url: "https://mehadihasan-portfolio.vercel.app",
    },
  ],

  creator: "Md Mehadi Hasan",

  openGraph: {
    title: "Md Mehadi Hasan | Virtual Assistant & Community Manager",
    description:
      "Professional Virtual Assistant, Community Manager, Lead Generation Specialist, and Accounts & Finance Professional.",

    url: "https://mehadihasan-portfolio.vercel.app",

    siteName: "Md Mehadi Hasan Portfolio",

    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Md Mehadi Hasan Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Md Mehadi Hasan Portfolio",
    description:
      "Virtual Assistant | Community Manager | Lead Generation Specialist",
    images: ["/profile.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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