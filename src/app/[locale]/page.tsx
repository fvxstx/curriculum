import MainContent from "@/components/MainContent";
import PageScaffold from "@/components/PageScaffold";

export default function Home() {
  return (
    <PageScaffold mainClassName="items-center justify-center py-8 md:py-12">
      <MainContent />
    </PageScaffold>
  );
}
