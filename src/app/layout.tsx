import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "중고마켓",
  description: "중고마켓",
};

function HTMLLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}

export default HTMLLayout;
