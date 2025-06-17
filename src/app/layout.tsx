import type { Metadata } from "next";
import '../scss/globals.scss';
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio - Mateus Maranhão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
