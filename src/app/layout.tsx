"use client";

import { Heebo, Roboto_Mono } from "next/font/google";
import "./globals.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./../assets/css/all.min.css";
import "react-quill/dist/quill.snow.css";
import "cropperjs/dist/cropper.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "react-hot-toast";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const heebo = Heebo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heebo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`min-h-screen bg-background font-sans antialiased ${roboto_mono.variable} ${heebo.variable}`}
      >
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
