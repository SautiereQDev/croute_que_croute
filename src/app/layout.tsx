import type { Metadata } from "next";
import "./globals.css";
import { playfair, lora } from "./fonts";
import getAssetPath from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "Croûte que Croûte | Boulangerie Artisanale",
  description:
    "Boulangerie artisanale depuis 1987. Pains, viennoiseries et pâtisseries faits maison avec des ingrédients de qualité.",
  icons: {
    icon: getAssetPath("/images/favicon.ico"),
    shortcut: getAssetPath("/images/favicon.ico"),
    apple: getAssetPath("/images/favicon.ico"),
  },
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
