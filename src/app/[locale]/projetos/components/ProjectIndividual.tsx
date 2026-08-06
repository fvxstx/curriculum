"use client";
import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IProject } from "@/data/Projects";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const ProjectIndividual = (proj: IProject) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translate = useTranslations("Projects");

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === proj.imgs.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? proj.imgs.length - 1 : prevIndex - 1,
    );
  };

  return (
    <article className="grid grid-cols-1 gap-8 rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-[0_20px_38px_rgba(66,75,84,0.1)] backdrop-blur-sm md:grid-cols-2 md:gap-10 md:p-7 lg:p-8">
      <AnimatedSection
        classNameInView="animate-fade-right animate-duration-[1500ms]"
        baseClassName="flex flex-col gap-3 justify-start"
      >
        <h3 className="mb-1 text-2xl font-semibold text-[#1f2d3d] md:text-3xl">
          {proj.title}
        </h3>
        <p className="mb-2 w-fit rounded-full border border-[#424b54]/20 bg-[#f4f8ff] px-3 py-1 text-xs font-semibold tracking-wide text-[#334155]">
          {translate("release")}: {proj.releaseDate}
        </p>

        <p className="text-[#3f4a57]">{proj.description}</p>

        {proj.link && (
          <p className="text-sm text-[#334155]">
            {translate("linkLabel")}:{" "}
            <a
              target="_blank"
              href={proj.link}
              className="text-[#2f5f7a] underline"
            >
              {proj.link}
            </a>
          </p>
        )}

        {proj.repository && (
          <p className="text-sm text-[#334155]">
            {translate("repository")}:{" "}
            <a
              target="_blank"
              href={proj.repository}
              className="text-[#2f5f7a] underline"
            >
              {proj.repository}
            </a>
          </p>
        )}

        <div className="mt-2 flex flex-wrap gap-2 text-sm">
          {proj.techs.map((tec, x) => (
            <span
              key={x}
              className="rounded-xl border border-[#93a8ac]/35 bg-[#f2f8fb] px-3 py-1.5 text-[#334155]"
            >
              {tec}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        classNameInView="animate-fade-left animate-duration-[1500ms]"
        baseClassName="w-full h-auto"
      >
        <Carousel className="w-full overflow-hidden rounded-2xl border border-[#93a8ac]/30 bg-white/70">
          <CarouselContent
            className="flex h-[260px] transition-transform duration-300 md:h-[282px]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {proj.imgs.map((src, index) => (
              <CarouselItem
                key={index}
                className="h-[260px] w-full flex-shrink-0 md:h-[282px]"
              >
                <Image
                  src={src}
                  alt={`Project Image ${index + 1}`}
                  width={5000}
                  height={5000}
                  quality={100}
                  className="h-full w-full object-cover object-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-4 flex items-center justify-between gap-4">
          <button
            onClick={handleBack}
            className="rounded-full border border-[#c5d5e4] bg-[#f0f6ff] px-4 py-2 text-sm font-semibold text-[#334155] transition hover:bg-[#dcecff]"
          >
            {translate("backButton")}
          </button>
          <button
            onClick={handleNext}
            className="rounded-full border border-[#c5d5e4] bg-[#f0f6ff] px-4 py-2 text-sm font-semibold text-[#334155] transition hover:bg-[#dcecff]"
          >
            {translate("nextButton")}
          </button>
        </div>
      </AnimatedSection>
    </article>
  );
};

export default ProjectIndividual;
