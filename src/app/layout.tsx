import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LetsZap - O atendimento humano que a sua empresa merece",
  description: "A ponte direta entre sua marca e seu cliente. Conecte todos os canais, utilize IA para tornar seu atendimento mais rápido e melhore a produtividade do seu time usando uma única plataforma.",
  keywords: "atendimento ao cliente, WhatsApp Business, chatbot, IA, omnichannel, LetsZap",
  authors: [{ name: "LetsZap" }],
  openGraph: {
    title: "LetsZap - O atendimento humano que a sua empresa merece",
    description: "A ponte direta entre sua marca e seu cliente. Conecte todos os canais, utilize IA para tornar seu atendimento mais rápido.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
