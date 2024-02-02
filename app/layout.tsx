import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Traveller",
  description: "Travelling UI/UX app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
