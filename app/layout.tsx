import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
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
      images: [
        {
          url: socialImage,
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
      images: [socialImage],
    },
  };
}

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
