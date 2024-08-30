import type { Metadata } from "next";
import "../globals.css";
import BgLayout from "@/components/molecules/blog/layout";


export const metadata: Metadata = {
  title: "Admin",
  description: "Admin Panel to Manage Personal Portfolio/blog Web app of and by Ravi Raina",
};

export default function BlogLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <BgLayout>
          {children}
        </BgLayout>
          
        </body>
    </html>
  );
}
