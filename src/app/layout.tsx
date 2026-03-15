import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ijebu Igbo Descendants in Diaspora",
  description:
    "Connecting Ijebu Igbo descendants across the world — promoting culture, unity, and sustainable development for Ijebu Igbo both at home and in the diaspora.",
  keywords: ["Ijebu Igbo", "diaspora", "Nigeria", "Ogun State", "Ojude Oba", "community", "development"],
  openGraph: {
    title: "Ijebu Igbo Descendants in Diaspora",
    description:
      "Promoting culture, unity, and sustainable development for Ijebu Igbo worldwide.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-[#111111]">
        {children}
      </body>
    </html>
  );
}
