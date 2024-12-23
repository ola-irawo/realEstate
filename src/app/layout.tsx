import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/header/Header"
import Footer from "@/layouts/footer/Footer";
import ReduxProvider from "@/redux/provider/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aremudami_luxury real estate",
    template: "%s | Aremudami_luxury real estate",
  },
  description: "Discover a wide range of properties, from cozy apartments to luxurious homes, available for sale, rent, or shortlet.",
  keywords: ["real estate", "property listing", "homes for sale", "houses for rent", "shortlet apartments", "investment properties"],
  robots: "index, follow",
  openGraph: {
    title: "Explore Properties for Sale, Rent, and Shortlet",
    description: "Discover a wide range of properties, from cozy apartments to luxurious homes, available for sale, rent, or shortlet.",
    url: `https://www.aremudami_luxury.com`,
    type: "website",
    images: [
      {
        url: `https://realestate-qx5l.onrender.com/favicon.ico`,
        width: 1200,
        height: 630,
        alt: "A preview of properties available for sale, rent, and shortlet",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <Header />
            {children}  
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
