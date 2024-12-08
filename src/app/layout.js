import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Form Builder App",
  description: "A responsive form builder built with Next.js and TailwindCSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}antialiased`}>{children}</body>
    </html>
  );
}
