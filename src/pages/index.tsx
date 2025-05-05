// Components:
import PageLayout from "@/components/layout/PageLayout";
import HomeInfo from "@/components/home/HomeInfo";
import HireMe from "@/components/home/HireMe";
import GeneralWrapper from "@/components/common/GeneralWrapper";
// Exports:
export { getStaticProps } from "@/tools/getStaticProps";

export default function Home() {
  return (
    <PageLayout>
      <GeneralWrapper className="mt-[70px] mb-[50px] lg:mb-0 lg:mt-0">
        <HomeInfo />
        <HireMe />
      </GeneralWrapper>
    </PageLayout>
  );
}
