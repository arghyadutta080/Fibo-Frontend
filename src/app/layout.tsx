import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/common/FooterComponent";
import StoreProvider from "@/lib/redux/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fibo | Home",
  description: "A simple Frontend using Next.js, TailwindCSS and Redux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
          <FooterComponent />{" "}
        </StoreProvider>
      </body>
    </html>
  );
}
