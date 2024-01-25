import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markus Stuppnig | Personal Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <Navbar />
        <div className="overflow-x-hidden flex flex-col min-h-screen">
          <div className="flex-grow">
            
            <div className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
