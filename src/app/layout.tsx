import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import dynamic from "next/dynamic";
import SocialIcons from "@/components/molecules/SocialIcons";
import NavIndicator from "@/components/molecules/NavIndicator";
import Curtain from "@/components/molecules/Curtain";
const Navbar = dynamic(() => import('@/components/molecules/Navbar'), {ssr: false});
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: "Ravi Raina",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Curtain />
        <main className={`${inter.className} ${poppins.className} bg-background min-h-screen px-20`}>
          <Navbar />
          
          {children}

          {/* Social Icons */}
          <div id="social-icons" className="absolute bottom-20 ">
            <SocialIcons />
          </div>


        </main>
      </ThemeProvider>
    </html>
  );
}
