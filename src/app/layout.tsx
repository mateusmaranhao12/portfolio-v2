import type { Metadata } from "next";
import '../scss/globals.scss';
import "./globals.css";
import '../scss/styles.scss';
import ThemeProvider from '@/components/theme/ThemeProvider';
import { ToastProvider } from '@/components/Common/Toast';

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
        <ThemeProvider>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
