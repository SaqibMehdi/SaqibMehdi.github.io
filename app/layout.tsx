import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saqib Mehdi | GNSS & Urban Atmospheric Sensing",
  description:
    "Academic portfolio of Saqib Mehdi, a GNSS researcher working on urban tropospheric sensing, PPP, ray tracing and multipath mitigation.",
  icons: {
    icon: "/saqib-mehdi.jpg",
    shortcut: "/saqib-mehdi.jpg",
  },
  openGraph: {
    title: "Saqib Mehdi | GNSS Researcher",
    description:
      "Urban GNSS, precise point positioning, 3D ray tracing and atmospheric sensing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
