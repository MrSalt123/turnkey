import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TurnKey Compliance",
  description: "TurnKey Compliance provides expert guidance and solutions for regulatory compliance, helping businesses navigate complex frameworks like SOC 2, ISO 27001, GDPR, and more.",
  keywords: "compliance, SOC 2, ISO 27001, GDPR, regulatory compliance, audit, certification",
  authors: [{ name: "TurnKey Compliance" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "TurnKey Compliance",
    description: "TurnKey Compliance provides expert guidance and solutions for regulatory compliance, helping businesses navigate complex frameworks like SOC 2, ISO 27001, GDPR, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>TurnKey Compliance - Expert Compliance Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${poppins.className} antialiased min-h-screen bg-cover bg-center bg-no-repeat bg-fixed`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
