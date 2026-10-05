import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

// Component imports
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { profile } from "@/lib/data";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: {
    default: "Sasank Talluri",
    template: "%s - Sasank Talluri"
  },
  description: "Software Engineer building scalable backend systems, distributed services, and full-stack applications with Java, Spring Boot, .NET, and AWS.",
  metadataBase: new URL(profile.site),
  openGraph: {
    title: "Sasank Talluri - Software Engineer",
    description: "Backend systems, distributed services & full-stack applications.",
    url: profile.site,
    siteName: "Sasank Talluri",
    type: "website",
  },
  twitter: {
    card: "summary_large_image"
  }
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="top" className={`${jetbrainsMono.variable} min-h-screen flex flex-col`}>
        {/* Decorative background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute -top-48 right-[-10%] w-[640px] h-[640px] rounded-full bg-accent/[0.07] blur-[120px]" />
          <div className="absolute top-[40%] -left-48 w-[520px] h-[520px] rounded-full bg-customColor/[0.04] blur-[120px]" />
        </div>
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
