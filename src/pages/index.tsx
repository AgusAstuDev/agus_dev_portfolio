// Components:
import PageLayout from "@/components/layout/PageLayout";
import HomeInfo from "@/components/home/HomeInfo";
import HireMe from "@/components/home/HireMe";
// Exports:
export { getStaticProps } from "@/tools/getStaticProps";

export default function Home() {
  return (
    <PageLayout>
      <HomeInfo />
      <HireMe />
    </PageLayout>
  );
}
