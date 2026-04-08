import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://folk-tech.ru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ФОЛК ТЕХ — AI-разработка для реального бизнеса",
    template: "%s | ФОЛК ТЕХ",
  },
  description:
    "Разрабатываем ИИ-системы для госсектора и инфраструктурных компаний. Автоматизация процессов, анализ данных, внедрение искусственного интеллекта под ключ.",
  keywords: [
    "AI разработка",
    "искусственный интеллект",
    "ИИ для бизнеса",
    "автоматизация процессов",
    "машинное обучение",
    "компьютерное зрение",
    "ИИ-агенты",
    "виртуальные сотрудники",
    "госсектор",
    "инфраструктурные компании",
    "on-premise ИИ",
    "импортозамещение ИИ",
    "ФОЛК ТЕХ",
    "folk-tech",
  ],
  authors: [{ name: "ФОЛК ТЕХ", url: siteUrl }],
  creator: "ФОЛК ТЕХ",
  publisher: "ФОЛК ТЕХ",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "ФОЛК ТЕХ",
    title: "ФОЛК ТЕХ — AI-разработка для реального бизнеса",
    description:
      "Разрабатываем ИИ-системы для госсектора и инфраструктурных компаний. Автоматизация процессов, анализ данных, внедрение ИИ под ключ.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ФОЛК ТЕХ — AI-разработка для реального бизнеса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ФОЛК ТЕХ — AI-разработка для реального бизнеса",
    description:
      "Разрабатываем ИИ-системы для госсектора и инфраструктурных компаний.",
    images: ["/og-image.png"],
  },
  verification: {
    yandex: "5e13a61e055e704c",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ФОЛК ТЕХ",
  alternateName: "Folk Tech",
  url: siteUrl,
  logo: `${siteUrl}/og-image.png`,
  description:
    "Разрабатываем ИИ-системы для госсектора и инфраструктурных компаний. Автоматизация процессов, компьютерное зрение, виртуальные сотрудники.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "tonywk@ya.ru",
    telephone: "+7-912-744-9001",
    availableLanguage: "Russian",
  },
  sameAs: ["https://t.me/tonywk"],
  areaServed: "RU",
  serviceType: [
    "AI разработка",
    "Автоматизация бизнес-процессов",
    "Компьютерное зрение",
    "ИИ-агенты",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108448573', 'ym');

          ym(108448573, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
        `}</Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/108448573" style={{position:"absolute", left:"-9999px"}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
