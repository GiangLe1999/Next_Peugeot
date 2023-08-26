import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { Chakra_Petch } from "next/font/google";
import Footer from "@/components/layout/Footer";
import ContactBtns from "@/components/layout/ContactBtns";
import Script from "next/script";

const chakra = Chakra_Petch({
  subsets: ["vietnamese"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ô tô Peugeot Khánh Hòa",
  description:
    "Cập nhật bảng giá xe Peugeot mới nhất gồm các dòng xe ô tô 4 bánh: 2008, 3008, 5008, Traveller cùng các khuyến mãi đi kèm. Cùng tham khảo trước khi mua xe.",
  verification: {
    google: "57HxdihzfhLclLFarH4JaUjH3lU66I7kRnpvGi9p2uQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-HRR0SWHLV4"
      ></Script>
      <Script id="google-analytic">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HRR0SWHLV4');`}
      </Script>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11312966304"
      ></Script>
      <Script id="google-analytic">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11312966304');`}
      </Script>

      <body className={chakra.className}>
        <Header />
        {children}
        <Footer />
        <ContactBtns />
      </body>
    </html>
  );
}
