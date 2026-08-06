import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

interface PageScaffoldProps {
  children: React.ReactNode;
  mainClassName?: string;
}

const PageScaffold = ({ children, mainClassName }: PageScaffoldProps) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-cv-gradient">
      <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-[#ffb88f]/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-56 h-80 w-80 rounded-full bg-[#8ec5ff]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#ffd7e3]/40 blur-3xl" />

      <div className="relative z-20 flex w-full justify-center">
        <Header />
      </div>

      <main
        className={cn(
          "relative z-10 flex w-full max-w-[1400px] flex-1 flex-col px-6 pb-20 pt-3 md:px-14 lg:px-20",
          mainClassName,
        )}
      >
        {children}
      </main>

      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default PageScaffold;
