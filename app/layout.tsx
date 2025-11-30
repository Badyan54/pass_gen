import type { Metadata } from "next";
import {Alegreya} from "next/font/google"
import "./globals.css";

const alegreyaFont = Alegreya({
  weight: ['400'],
}) 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alegreyaFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
