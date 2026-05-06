import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxe Auto | Autodesguace Mercedes-Benz",
  description:
    "Tienda de repuestos Mercedes-Benz. Piezas originales certificadas para todos los modelos desde 2005.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
