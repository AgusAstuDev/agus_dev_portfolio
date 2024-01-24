// React-Next:
import type { AppProps } from "next/app";
// Context:
import { LangProvider } from "@/context/langContext";
// Styles:
import "@/styles/globals.css";
// Fonts:
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--roboto",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.variable}`}>
      <LangProvider locale={pageProps.locale} locales={pageProps.locales}>
        <Component {...pageProps} />
      </LangProvider>
    </div>
  );
}
