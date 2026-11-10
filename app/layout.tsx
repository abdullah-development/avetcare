import type { Metadata, Viewport } from "next";
import { Barlow, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import "./globals.css";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const barlow = Barlow({ variable: "--font-head", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://avetcare.ae"),
  title: "AvetCare",
  description:
    "AvetCare Middle East supplies European-made cleaning systems to hospitals, offices, schools, hotels and malls across the UAE.",
};

export const viewport: Viewport = { themeColor: "#0e2a47" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`} data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
