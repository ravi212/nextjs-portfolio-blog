
import { Inter, Poppins } from "next/font/google";
import BgLayout from "@/components/molecules/blog/layout";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Template({
  params,
  searchParams,
  children
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string  | undefined };
  children: React.ReactNode
}) {

  return (
    <main className={`${inter.className} ${poppins.className} flex flex-col min-h-screen bg-background`}>
      <BgLayout slug={params?.slug}>
        {children}
      </BgLayout>
    </main>
  );
}
