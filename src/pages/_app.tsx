// React-Next:
import type { AppProps } from "next/app";
// Context:
import { LangProvider } from "@/context/langContext";
// Styles:
import "@/styles/globals.css";
// Fonts:
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-montserrat`}>
      <LangProvider locale={pageProps.locale} locales={pageProps.locales}>
        <Component {...pageProps} />
      </LangProvider>
    </main>
  );
}
