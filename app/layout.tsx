import type { Metadata } from "next";import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://prompts.poyrazavsever.com"),

  title: {
    default: "Poyraz Prompts | AI Prompt Arşivi",
    // Bir alt sayfada sadece title: "Ankara Build Club" dersen,
    // Next.js bunu otomatik olarak "Ankara Build Club | Poyraz Prompts" yapar.
    template: "%s | Poyraz Prompts",
  },
  description:
    "Etkinlikler, yarışmalar ve toplulukla paylaşmak için oluşturduğum minimal yapay zeka prompt arşivi.",
  keywords: [
    "prompt",
    "prompt engineering",
    "ai",
    "generative ai",
    "hackathon",
    "poyraz avsever",
    "chatgpt",
    "gemini",
  ],
  authors: [{ name: "Poyraz Avsever", url: "https://seninkisisel siten.com" }],
  creator: "Poyraz Avsever",

  // Open Graph (WhatsApp, LinkedIn, Facebook, Discord vb. link önizlemeleri için)
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    title: "Poyraz Prompts | AI Prompt Arşivi",
    description:
      "Etkinlikler, yarışmalar ve toplulukla paylaşmak için oluşturduğum minimal yapay zeka prompt arşivi.",
    siteName: "Poyraz Prompts",
    images: [
      {
        url: "/og-image.png", // public klasörünün içine 1200x630 boyutunda bir görsel eklemelisin
        width: 1200,
        height: 630,
        alt: "Poyraz Prompts",
      },
    ],
  },

  // Twitter Card yapısı (X üzerinde paylaşıldığında büyük resimli çıkması için)
  twitter: {
    card: "summary_large_image",
    title: "Poyraz Prompts | AI Prompt Arşivi",
    description:
      "Etkinlikler, yarışmalar ve toplulukla paylaşmak için oluşturduğum minimal yapay zeka prompt arşivi.",
    creator: "@senintwitteradresin", // Varsa Twitter/X kullanıcı adın
    images: ["/og-image.png"],
  },

  // Tarayıcı sekmesinde ve telefona kaydedildiğinde çıkacak ikonlar
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-full flex flex-col">
        {children}
        </body>
    </html>
  );
}
