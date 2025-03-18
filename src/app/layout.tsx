import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const outFit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "DirectCodes - Sign Up",
  description: "Create your account on DirectCodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outFit.className} ${ovo.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
