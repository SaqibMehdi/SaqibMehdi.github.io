import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saqibmehdi.github.io"),
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
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1672,
        height: 941,
        alt: "Saqib Mehdi — GNSS, Urban Ray Tracing and Resilient PNT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saqib Mehdi | GNSS Researcher",
    description:
      "Urban GNSS, precise point positioning, 3D ray tracing and atmospheric sensing.",
    images: ["/og.png"],
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
