import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ijebu Igbo Descendants in Diaspora",
  description:
    "Connecting Ijebu Igbo descendants across the world — promoting culture, unity, and sustainable development for Ijebu Igbo both at home and in the diaspora.",
  keywords: ["Ijebu Igbo", "diaspora", "Nigeria", "charity", "community", "culture"],
  openGraph: {
    title: "Ijebu Igbo Descendants in Diaspora",
    description:
      "Connecting Ijebu Igbo descendants across the world — promoting culture, unity, and sustainable development.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
