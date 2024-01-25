// Components:
import PageLayout from "@/components/layout/PageLayout";
import Header from "@/components/layout/Header";
// Exports:
export { getStaticProps } from "@/tools/getStaticProps";

export default function Home() {
  return (
    <PageLayout>
      <Header />
    </PageLayout>
  );
}
