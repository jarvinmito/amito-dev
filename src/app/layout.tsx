import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen bg-white text-neutral-950 antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
