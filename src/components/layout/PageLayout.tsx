// React-Next:
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
// Components:
import Header from "./Header";
import Footer from "./Footer";

// Interface:
interface Props {
  home?: boolean;
  description?: string;
  title?: string;
  children: React.ReactNode;
  image?: string;
}

export default function PageLayout({
  title = "AgusAstuDev",
  description = "Frontend developer",
  image = "/favicon.png",
  children,
}: Props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {title}{" "}
          {router.asPath == "/"
            ? ""
            : `| ${
                router.asPath.substring(1)[0].toUpperCase() +
                router.asPath.substring(2)
              }`}
        </title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="New page" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
