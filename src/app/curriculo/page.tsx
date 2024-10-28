import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ExProfissional from "./components/ExProfissional";
import Education from "./components/Education";

export default function CurriculoPage() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-24 lg:px-32">
        <h2 className="text-2xl md:text-5xl font-bold w-full mt-4 mb-8 md:mt-8 md:mb-20">
          Currículo
        </h2>
        <ExProfissional />
        <div className="w-full h-[1px] bg-[#c7c7c7] my-28"></div>
        <Education />
        <div className="w-full h-[1px] bg-[#c7c7c7] my-28"></div>
        <section className="flex flex-col md:flex-row justify-between items-start w-full gap-4">
          <h3 className="text-lg md:text-3xl font-semibold ">
            Skills
            <p className="text-lg md:text-3xl font-semibold ">& Cerficações</p>
          </h3>

          <div className="flex flex-col gap-16">
            {/* {education.map((job, index) => (
              <p key={index}>job</p>
            ))} */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
