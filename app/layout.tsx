import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Aleo } from "next/font/google";
import { Layout } from "../components/app-layout";
import { twMerge } from "tailwind-merge";

const aleo = Aleo({ subsets: ["latin"], variable: "--font-aleo" });

export const metadata: Metadata = {
  title: "Binder Dundat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge("text-slate-300", aleo.variable)}>
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
