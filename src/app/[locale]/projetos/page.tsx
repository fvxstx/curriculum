"use client";

import ProjectIndividual from "./components/ProjectIndividual";
import { IProject, projectsData } from "@/data/Projects";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/Pagination";
import { useLocale, useTranslations } from "next-intl";
import PageScaffold from "@/components/PageScaffold";

const PROJECTS_PER_PAGE = 10;

export default function ProjetosPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<IProject[]>([]);
  const translate = useTranslations("Projects");
  const locale = useLocale();

  useEffect(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    const end = start + PROJECTS_PER_PAGE;

    setProjects(projectsData.projects.slice(start, end));

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <PageScaffold>
      <section className="mb-10 flex w-full flex-col gap-5 rounded-[2rem] border border-white/60 bg-white/70 p-7 shadow-[0_20px_60px_rgba(66,75,84,0.12)] backdrop-blur-sm md:mb-14 md:p-10 animate-fade-down animate-duration-[1300ms]">
        <h2 className="text-3xl font-bold text-[#1f2d3d] md:text-5xl">
          {translate("title")}
        </h2>
        <p className="max-w-2xl text-sm text-[#445265] md:text-base">
          {translate("intro")}
        </p>
      </section>

      <section className="flex flex-col gap-10 md:gap-14">
        {projects
          .slice()
          .reverse()
          .map((proj, index) => {
            return (
              <ProjectIndividual
                key={index}
                imgs={proj.imgs}
                title={proj.title}
                description={
                  locale == "en" ? proj.descriptionEnglish! : proj.description
                }
                link={proj.link}
                releaseDate={
                  locale == "en" ? proj.releaseDateEnglish! : proj.releaseDate
                }
                repository={proj.repository}
                techs={locale == "en" ? proj.techsEnglish! : proj.techs}
              />
            );
          })}
      </section>

      <section className="mt-12 flex w-full items-center justify-center rounded-3xl border border-white/60 bg-white/70 px-2 py-4 shadow-[0_12px_24px_rgba(66,75,84,0.08)] backdrop-blur-sm md:mt-16 md:px-4">
        <Pagination
          totalCount={projectsData.projects.length}
          handlePage={setCurrentPage}
          pageIndex={currentPage}
          perPage={PROJECTS_PER_PAGE}
        />
      </section>
    </PageScaffold>
  );
}
