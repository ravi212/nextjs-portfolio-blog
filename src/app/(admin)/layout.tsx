
import type { Metadata } from "next";
import "../globals.css";
import dynamic from "next/dynamic";
const AdLayout = dynamic(() => import ("@/components/molecules/admin/layout"), {ssr: false}) ;

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin Panel to Manage Personal Portfolio/blog Web app of and by Ravi Raina",
};

export default function AdminLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <AdLayout>
          {children}
        </AdLayout>
        </body>
    </html>
  );
}
