import { jobsEnglish, jobsPortuguese } from "@/data/Jobs";
import { getLocale, getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import ExProfissionalTimeline from "./ExProfissionalTimeline";

const ExProfissional = async () => {
  const translate = await getTranslations("Experiences");
  const locale = await getLocale();

  return (
    <section className="w-full rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_20px_40px_rgba(66,75,84,0.1)] backdrop-blur-sm md:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-10">
        <AnimatedSection
          baseClassName="md:sticky md:top-24 md:self-start"
          classNameInView="animate-fade-right animate-duration-[1700ms]"
        >
          <h3 className="text-2xl font-semibold text-[#1f2d3d] md:text-3xl">
            {translate("professional")}
          </h3>
          <p className="mt-2 max-w-xs text-sm text-[#4b5b6b]">
            {translate("professionalDescription")}
          </p>
        </AnimatedSection>

        <div className="relative flex-1 pl-1 md:pl-2">
          <div className="pointer-events-none absolute left-[6px] top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-[#ff9472] via-[#8ec5ff] to-[#93a8ac] md:left-[8px]" />

          <ExProfissionalTimeline
            jobs={locale == "en" ? jobsEnglish : jobsPortuguese}
            initialVisible={3}
            seeMoreLabel={translate("seeMore")}
          />
        </div>
      </div>
    </section>
  );
};

export default ExProfissional;
