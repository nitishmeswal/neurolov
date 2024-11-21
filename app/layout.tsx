import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
// import {AppSidebar} from "@/components/sidebar-demo";
import CustomSidebar from "@/components/sidebar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = localFont({
  src: "./fonts/Inter_Regular.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="flex flex-col w-full">
            {/* Header is always at the top */}
            <nav className="flex w-full sticky top-0">
              <Header />
            </nav>
            <div className="h-[1px] w-full bg-gray-250"></div>
            {/* Sidebar and content */}
            <div className="flex flex-row flex-1">
              {/* Sidebar */}
              <div className=" bg-gray-950">
                <CustomSidebar />
              </div>

              {/* Main content */}
              <main className="flex-1 bg-gray-100">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

