import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin Panel to Manage Personal Portfolio/blog Web app of and by Ravi Raina",
};

export default function BlogLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
          {children}
        </body>
    </html>
  );
}
