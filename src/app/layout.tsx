import type { Metadata } from "next";
import '../scss/globals.scss';
import "./globals.css";
import '../scss/styles.scss';

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
      <body className="bg-purple-950 text-white">
        {children}
      </body>
    </html>
  );
}
