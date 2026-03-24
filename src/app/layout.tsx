import type { Metadata } from "next";
import '../scss/globals.scss';
import "./globals.css";
import '../scss/styles.scss';
import ThemeProvider from '@/components/theme/ThemeProvider';

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
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
