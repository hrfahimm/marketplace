import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "✨ Marketplace ✨",
    description: "Degital Marketplace app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(" relative h-full font-sans antialiased", inter.className)}>
                <main className="relative flex flex-col min-h-screen">
                    <div className="flex-grow flex-1">
                        <Providers>
                            <Navbar />
                            {children}
                            <Footer />
                        </Providers>

                    </div>
                </main>

            </body>
        </html>
    );
}
