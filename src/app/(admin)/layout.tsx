import type { Metadata } from "next";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Curtain from "@/components/molecules/client/layout/Curtain";
import "../globals.css";
import AdLayout from "@/components/molecules/admin/layout";
export const metadata: Metadata = {
  title: "Admin",
  description: "Personal Portfolio Web app of and by Ravi Raina",
};

export default function AdminLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
      <Curtain />
        <AdLayout>
          {children}
        </AdLayout>
        </body>
    
    </html>
  );
}
