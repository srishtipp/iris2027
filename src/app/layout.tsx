import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Load custom fonts
const saman = localFont({
  src: "../../public/fonts/Saman.ttf",
  variable: "--font-saman",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IRIS 2027",
  // title: "IRIS 2026 | Indiverse",
  description:
    "The official website of IRIS 2027. Indias's Premier Management Student-Run College Cultural Festival returns for 2026!",
  applicationName: "IRIS 2027",
  keywords: [
    "IRIS",
    "IIM",
    "Indore",
    "Madhya Pradesh",
    "IIM Indore",
    "PGP",
    "MBA",
    "Business",
    "Master of Business Administration",
    "IRIS 2027",
    "2027",
    "IRIS 2026",
    "2026",
    "IRIS IIM Indore",
    "IIM IRIS",
    "management fest",
    "management",
    "college fest",
    "fest",
    "Madhya Pradesh",
    "cultural fest",
    "Indiverse",
    "college cultural fest",
    "engineering",
    "student fest India",
  ],
  authors: [{ name: "Systems & IT team of IRIS 2027" }],
  openGraph: {
    type: "website",
    title: "IRIS 2027",
    description:
    "The official website of IRIS 2027. Indias's Premier Management Student-Run College Cultural Festival returns for 2027!",
    url: "https://www.iris-iimidr.com/",
    siteName: "IRIS 2027 | Indiverse",
    images: [
      {
        url: "https://www.iris-iimidr.com/",
        alt: "IRIS 2027 Logo",
      },
    ],
  },
  verification: {
    google: "u_D4irk99rP4PM6hQYcHiNDbZAvwjoduuU3eZeo5hA8",
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
        <link rel="preload" as="image" href="https://iris.cdn.jyotirmoysaha.co.in/images/landing/bg_landscape.webp" />
      </head>
      <body className={`${saman.variable} antialiased`}>
        <Navigation />
        <div id="root">{children}</div>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
