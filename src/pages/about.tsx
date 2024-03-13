// React-Next:
import React from "react";
// Components:
import PageLayout from "@/components/layout/PageLayout";
import About from "@/components/about/About";
// Exports:
export { getStaticProps } from "@/tools/getStaticProps";

export default function about() {
  return (
    <PageLayout>
      <About></About>
    </PageLayout>
  );
}
