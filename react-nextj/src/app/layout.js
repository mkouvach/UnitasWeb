import { Geist, Geist_Mono } from "next/font/google";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";
import BootstrapClient from "@/components/bootstrap/bootstrapClient";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (

      <div>
        <Menu />
        <main>
          {children}
        </main>
        <Footer />
        <BootstrapClient  />


      </div>

  );
}

/* <body className={`${geistSans.variable} ${geistMono.variable} mybgcolor`}> */