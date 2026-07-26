import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina",
  description: "A minimal, distraction-free workspace designed to streamline your daily workflow, automate task tracking, and maximize deep work output.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
