import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/cinematic/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kavya Goswami | Software Engineer & AI/ML Developer",
  description:
    "Computer Science undergraduate at BML Munjal University specializing in AI & ML. Full-stack developer with expertise in MERN Stack, Flutter, Python, and Deep Learning. Building intelligent systems and scalable applications.",
  keywords: [
    "Kavya Goswami",
    "Software Engineer",
    "Full Stack Developer",
    "AI ML Developer",
    "Flutter Developer",
    "MERN Stack",
    "React Developer",
    "Python Developer",
    "BML Munjal University",
    "Portfolio",
  ],
  authors: [{ name: "Kavya Goswami" }],
  creator: "Kavya Goswami",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kavyagoswami.dev",
    title: "Kavya Goswami | Software Engineer & AI/ML Developer",
    description:
      "Computer Science undergraduate specializing in AI & ML. Full-stack developer building intelligent systems and scalable applications.",
    siteName: "Kavya Goswami Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavya Goswami | Software Engineer & AI/ML Developer",
    description:
      "Computer Science undergraduate specializing in AI & ML. Full-stack developer building intelligent systems and scalable applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased noise`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
