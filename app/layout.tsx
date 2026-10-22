import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Round trips leave the organic side",
  description: "alice to bob for 100 and bob to alice for 40. Wash is 80. Organic is 60. One direction is not wash. No market is scanned.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
