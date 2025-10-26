import "server-only";

import { Figtree, Lora, SUSE } from "next/font/google";

import "./globals.css";

const BodyFont = Figtree({
  weight: "variable",
  subsets: ["latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const HeaderFont = Lora({
  weight: "variable",
  subsets: ["latin-ext"],
  variable: "--font-header",
});

const TilliFont = SUSE({
  weight: "variable",
  subsets: ["latin-ext"],
  variable: "--font-tilli",
});

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html
      className={`${HeaderFont.variable} ${BodyFont.variable} ${TilliFont.variable}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
};

export default Layout;
