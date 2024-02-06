import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className='scroll-smooth overflow-scroll' style={{scrollBehavior:'smooth'}}>
      <body>
        <div className="bg-black" style={{position: "fixed", top: "", left: "0", width: "100%", height: "100%", background: "url('bg/background_v3.png')", backgroundPosition: "bottom left", backgroundSize: 'cover', backgroundRepeat: "no-repeat", zIndex: "-1000", opacity: "1.0"}} />
        <Navbar />
        <div className="overflow-x-hidden">
          <div className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
