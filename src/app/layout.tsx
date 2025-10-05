import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFH WABO Floor Plan AI",
  description: "AI-Powered Floor Plan Generation for Adult Family Home Conversions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
