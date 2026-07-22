import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "@/components/providers/ThemeProvider";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Kavita Gairola | Full Stack Developer",
  description:
    "Portfolio of Kavita Gairola, Full Stack Developer skilled in Next.js, React, TypeScript, Node.js, MongoDB, and Tailwind CSS.",

  keywords: [
    "Kavita Gairola",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Portfolio",
  ],

  authors: [{ name: "Kavita Gairola" }],

  creator: "Kavita Gairola",

  openGraph: {
    title: "Kavita Gairola | Full Stack Developer",
    description:
      "Portfolio of Kavita Gairola built with Next.js, TypeScript, Tailwind CSS and Node.js.",
    url: "https://portfolio-eta-seven-kavwolohyc.vercel.app",
    siteName: "Kavita Portfolio",
    type: "website",
    locale: "en_US",
  },

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable}`}>
        <ThemeProvider>
          {children}

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#111827",
                color: "#fff",
                border: "1px solid #8b5cf6",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}