import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectIndividual from "./components/ProjectIndividual";
import { allProjects } from "@/data/Projects";

export default function ProjetosPage() {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        <Header />
        <main className="w-full flex flex-col justify-center items-center px-6  md:px-24 lg:px-32 max-w-[1400px]">
          <h2 className="text-3xl md:text-5xl font-bold w-full mt-4 mb-8 md:mt-8 md:mb-20">
            Projetos
          </h2>
          <section className="flex flex-col gap-20">
            {allProjects.map((proj, index) => {
              return (
                <ProjectIndividual
                  key={index}
                  imgs={proj.imgs}
                  title={proj.title}
                  description={proj.description}
                  link={proj.link}
                  releaseDate={proj.releaseDate}
                  repository={proj.repository}
                />
              );
            })}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
