import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "~/components/Navbar";   // ← 加上這行 import
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#616161",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title:
    "Compress & Convert Videos Like a Pro - Free, High-Quality offline Tool",
  description:
    "Say goodbye to bulky video files! Compress and convert videos effortlessly with our free offline tool. Enjoy high-quality results without sacrificing clarity, perfect for sharing, uploading, or editing. Convert like a pro, for free!",
  keywords: [
    "Free Video Compressor",
    "Online Video Converter",
    "Video Compression Tool",
    "Image Compression Tool",
    "Compress Video Online",
    "Convert Video Online",
    "High-Quality Video Compression",
    "Shrink Video File Size",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Compress & Convert Videos Like a Pro - Free, High-Quality Online Tool",
    description:
      "Say goodbye to bulky video files! Compress and convert videos effortlessly with our free offline tool. Enjoy high-quality results without sacrificing clarity, perfect for sharing, uploading, or editing. Convert like a pro, for free!",
    url: process.env.NEXT_PUBLIC_URL,
    type: "website",
    images: "/og-image.jpg",
    siteName: "Video Compression Hub",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ThatsPranav",
    creator: "@ThatsPranav",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />          {/* ← 加上這行，只顯示 logo */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
