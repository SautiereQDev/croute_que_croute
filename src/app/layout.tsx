import type { Metadata } from "next";
import "./globals.css";
import { playfair, lora } from "./fonts";

export const metadata: Metadata = {
  title: "Croûte que Croûte | Boulangerie Artisanale",
  description:
    "Boulangerie artisanale depuis 1987. Pains, viennoiseries et pâtisseries faits maison avec des ingrédients de qualité.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
