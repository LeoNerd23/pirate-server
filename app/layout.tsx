import "./globals.css";
import type { Metadata } from "next";
import "./fonts.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Pirate Server",
  description: "Pirate Server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
