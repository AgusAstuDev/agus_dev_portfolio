// React-Next:
import React from "react";
import Head from "next/head";

// Interface:
interface Props {
  home?: boolean;
  description?: string;
  title?: string;
  children: React.ReactNode;
  image?: string;
}

export default function PageLayout({
  title = "Agus Astu Dev",
  description = "Frontend developer",
  image = "/images/next.svg",
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="New page" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <main>{children}</main>
    </>
  );
}
