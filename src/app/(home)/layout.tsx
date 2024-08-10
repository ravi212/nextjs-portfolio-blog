import type { Metadata } from "next";
import "../globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Curtain from "@/components/molecules/client/layout/Curtain";

export const metadata: Metadata = {
  title: "Ravi Raina",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Curtain />
        {children}
      </ThemeProvider>
    </html>
  );
}
