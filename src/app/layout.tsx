import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Apple Show",
  description: "Apple Show Case Website",
};

const Regular = localFont({
  src: "../../public/fonts/regular.otf",
  variable: "--font-regular",
  display: "swap",
});
const Medium = localFont({
  src: "../../public/fonts/medium.otf",
  variable: "--font-medium",
  display: "swap",
});
const SemiBold = localFont({
  src: "../../public/fonts/semibold.otf",
  variable: "--font-semibold",
  display: "swap",
});
const Bold = localFont({
  src: "../../public/fonts/bold.otf",
  variable: "--font-bold",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Regular.variable} ${Medium.variable} ${SemiBold.variable} ${Bold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
