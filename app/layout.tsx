import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Kavita | Full Stack Developer",
  description: "Modern Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>
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
</body>
    </html>
  );
}