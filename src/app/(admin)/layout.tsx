import type { Metadata } from "next";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Curtain from "@/components/molecules/client/layout/Curtain";
const AdLayout = lazy(() => import ("@/components/molecules/admin/layout")) ;
import { lazy, Suspense } from "react";
import "../globals.css";
import Spinner from "@/components/atoms/common/Spinner";
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
