import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HELA — Your Journey Doesn't Stop Here",
  description:
    "HELA helps newcomer students navigate the U.S. college system with personalized roadmaps, mentorship, and scholarship guidance.",
  openGraph: {
    title: "HELA — Your Journey Doesn't Stop Here",
    description:
      "HELA helps newcomer students navigate the U.S. college system with personalized roadmaps, mentorship, and scholarship guidance.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HELA — Your Journey Doesn't Stop Here",
    description:
      "HELA helps newcomer students navigate the U.S. college system with personalized roadmaps, mentorship, and scholarship guidance.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
