import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="flex items-start flex-col relative justify-start min-h-screen h-full w-full font-rubick bg-background text-foreground">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
