import "./globals.css";
import Script from "next/script";
import ViewportHeight from "./components/ViewportHeight";
import CookieBanner from "./components/CookieBanner";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "Cafe 't Mingelmous",
  description: "Café-bar 't Mingelmous – Menistenplein 10, Stadskanaal. Gezelligheid, speciaalbier en cocktails.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Cafe 't Mingelmous",
    description: "Café-bar 't Mingelmous – Menistenplein 10, Stadskanaal.",
    type: "website",
    images: ["/og-mingelmous.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <Script
          id="viewport-height-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=window.visualViewport?window.visualViewport.height:window.innerHeight;document.documentElement.style.setProperty('--window-height',h+'px');})();`,
          }}
        />
        <ViewportHeight />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
