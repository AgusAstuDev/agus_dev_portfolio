// Components:
import PageLayout from "@/components/layout/PageLayout";
import Header from "@/components/layout/Header";
import HomeInfo from "@/components/home/HomeInfo";
// Exports:
export { getStaticProps } from "@/tools/getStaticProps";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <HomeInfo />
    </PageLayout>
  );
}
