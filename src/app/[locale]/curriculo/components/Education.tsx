import { educationEnglish, educationPortuguese } from "@/data/Education";
import JobComponent from "./Job";
import { getLocale, getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";

const Education = async () => {
  const translate = await getTranslations("Experiences");
  const locale = await getLocale();

  return (
    <section className="flex flex-col md:flex-row justify-between items-start w-full gap-4">
      <AnimatedSection classNameInView="animate-fade-right animate-duration-[2000ms]">
        <h3 className="text-2xl md:text-3xl font-semibold ">
          {translate("education")}
        </h3>
      </AnimatedSection>
      <div className="flex flex-col gap-10">
        {(locale == "en" ? educationEnglish : educationPortuguese).map(
          (job, index) => (
            <JobComponent
              key={index}
              period={job.period}
              company={job.company}
              job={job.job}
              description={job.description}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Education;
