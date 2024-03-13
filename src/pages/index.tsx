// Components:
import PageLayout from "@/components/layout/PageLayout";
import Header from "@/components/layout/Header";
import HomeInfo from "@/components/home/HomeInfo";
import Footer from "@/components/layout/Footer";
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
