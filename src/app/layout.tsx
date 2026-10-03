import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Akshaj Kashyap | Machine Learning & Software Engineering",
    template: "%s | Akshaj Kashyap",
  },
  description: "Akshaj Kashyap is a second-year Computer Science undergraduate at UC Santa Barbara building machine-learning and software systems across rigorous experimentation, efficient inference, and reliable infrastructure.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-canvas font-sans text-text antialiased">
        <a
          className="sr-only fixed left-4 top-4 z-50 rounded-sm bg-accent px-4 py-3 text-sm font-semibold text-surface focus:not-sr-only"
          href="#main-content"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
