import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080c16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.abdulsmeed.com"),
  title: "Abdul Smeed Ahmad | Software Engineer & Flutter / Full-Stack Developer",
  description:
    "Portfolio of Abdul Smeed Ahmad — Results-driven Software Engineer specializing in scalable cross-platform mobile apps (Flutter), full-stack web platforms (Next.js), multi-tenant SaaS, and applied AI systems.",
  keywords: [
    "Abdul Smeed Ahmad",
    "Flutter Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Software Engineer Rawalpindi",
    "Clean Architecture",
    "Antigravity AI",
    "Mobile App Architect",
    "Supabase",
    "Firebase",
    "Stripe Integration"
  ],
  authors: [{ name: "Abdul Smeed Ahmad" }],
  creator: "Abdul Smeed Ahmad",
  openGraph: {
    title: "Abdul Smeed Ahmad | Software Engineer & Flutter / Full-Stack Developer",
    description:
      "Results-driven Software Engineer with proven experience delivering scalable cross-platform mobile and full-stack web applications.",
    url: "https://portfolio.abdulsmeed.com",
    siteName: "Abdul Smeed Ahmad Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Abdul Smeed Ahmad - Software Engineer"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Smeed Ahmad | Software Engineer & Flutter / Full-Stack Developer",
    description:
      "Results-driven Software Engineer delivering scalable cross-platform mobile and full-stack web applications.",
    images: ["/images/profile.jpg"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

import { ClientProviders } from "../components/ClientProviders";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
