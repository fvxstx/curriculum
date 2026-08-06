import { educationEnglish, educationPortuguese } from "@/data/Education";
import JobComponent from "./Job";
import { getLocale, getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";

const Education = async () => {
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
            {translate("education")}
          </h3>
          <p className="mt-2 max-w-xs text-sm text-[#4b5b6b]">
            {translate("educationDescription")}
          </p>
        </AnimatedSection>

        <div className="flex flex-1 flex-col gap-6">
          {(locale == "en" ? educationEnglish : educationPortuguese).map(
            (job, index) => (
              <JobComponent
                key={index}
                period={job.period}
                company={job.company}
                job={job.job}
                description={job.description}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
