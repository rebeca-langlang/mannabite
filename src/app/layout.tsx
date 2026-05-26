import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "MannaBite — 말씀을 한 입씩, 매일 맛보다",
  description:
    "한/영 동시에 게임으로 외우는 어린이 성경 암송 앱. 노래 → 그림 → 청크 → 게임으로 매일 한 구절.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFAF5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
