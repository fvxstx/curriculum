import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ExProfissional from "./components/ExProfissional";
import Education from "./components/Education";
import SkillsCertification from "./components/SkillsCertification";

export default function CurriculoPage() {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        <Header />
        <main className="w-full flex flex-col justify-center items-center px-6  md:px-24 lg:px-32 max-w-[1400px]">
          <h2 className="text-3xl md:text-5xl font-bold w-full mt-4 mb-8 md:mt-8 md:mb-20">
            Currículo
          </h2>
          <ExProfissional />
          <div className="w-full h-[1px] bg-[#c7c7c7] my-28"></div>
          <Education />
          <div className="w-full h-[1px] bg-[#c7c7c7] my-28"></div>
          <SkillsCertification />
        </main>
        <Footer />
      </div>
    </>
  );
}
