import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import dynamic from "next/dynamic";
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
        <main className={`${inter.className} ${poppins.className} bg-background min-h-screen px-16`}>
          <Navbar />
          {children}
        </main>
      </ThemeProvider>
    </html>
  );
}
