import type { Metadata } from "next";
import "../globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Curtain from "@/components/molecules/client/layout/Curtain";
import Footer from "@/components/molecules/client/layout/Footer";
import { siteMetaData } from "@/constants/siteMetaData";
import GoogleAnalytics from "@/utils/googleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetaData.siteUrl),
  title: {
    template: ` ${siteMetaData.title} | %s `,
    default: siteMetaData.title,
  },
  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    images: [siteMetaData.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Curtain />
        {children}
        <Footer />
      </ThemeProvider>
      <GoogleAnalytics />
    </html>
  );
}
