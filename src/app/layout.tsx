import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode;
}) {
  return (
      <html lang="en" className="motion-safe:scroll-smooth">
      <body className="bg-slate-50 font-sans text-slate-950 antialiased selection:bg-emerald-200">
      {children}
      </body>
      </html>
  );
}