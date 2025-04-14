import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";

// font otimizada
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Retaurante BerryCat",
  description: "Aplicativo de Cardápio Digital para o Restaurante BerryCat",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
