"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectIndividual from "./components/ProjectIndividual";
import { IProject, projectsPaged } from "@/data/Projects";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/Pagination";

export default function ProjetosPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    setProjects(projectsPaged.projects[currentPage]);
    if (window) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center ">
        <Header />
        <main className="w-full flex flex-col justify-center items-center px-6  md:px-24 lg:px-32 max-w-[1400px] ">
          <h2 className="text-3xl md:text-5xl font-bold w-full mt-4 mb-8 md:mt-8 md:mb-20">
            Projetos
          </h2>
          <section className="flex flex-col gap-20 md:gap-32">
            {projects
              .slice()
              .reverse()
              .map((proj, index) => {
                return (
                  <ProjectIndividual
                    key={index}
                    imgs={proj.imgs}
                    title={proj.title}
                    description={proj.description}
                    link={proj.link}
                    releaseDate={proj.releaseDate}
                    repository={proj.repository}
                    techs={proj.techs}
                  />
                );
              })}
          </section>
          <section className="flex items-center justify-center w-full mt-16">
            <Pagination
              totalCount={projectsPaged.totalProjects}
              handlePage={setCurrentPage}
              pageIndex={currentPage}
              perPage={10}
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
