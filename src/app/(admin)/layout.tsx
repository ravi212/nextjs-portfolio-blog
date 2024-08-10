import type { Metadata } from "next";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Curtain from "@/components/molecules/client/layout/Curtain";
import "../globals.css";
export const metadata: Metadata = {
  title: "Admin",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function AdminLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Curtain />
        {children}
      </ThemeProvider>
    </html>
  );
}
