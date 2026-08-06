import {
  certificacaoEnglish,
  certificacaoPortuguese,
} from "@/data/Certificoes";
import JobComponent from "./Job";
import { skillsEnglish, skillsPortuguese } from "@/data/Skills";
import { getLocale, getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";

const SkillsCertification = async () => {
  const translate = await getTranslations("Experiences");
  const locale = await getLocale();

  return (
    <section className="w-full rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_20px_40px_rgba(66,75,84,0.1)] backdrop-blur-sm md:p-10">
      <AnimatedSection classNameInView="animate-fade-right animate-duration-[1700ms]">
        <h3 className="mb-6 text-2xl font-semibold text-[#1f2d3d] md:text-3xl">
          {translate("skillCertif")}
        </h3>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-3xl border border-[#93a8ac]/30 bg-[#f8fbff]/80 p-5 md:p-7">
          <AnimatedSection classNameInView="animate-fade-down animate-duration-[1700ms]">
            <h4 className="mb-5 text-xl font-bold text-[#1f2d3d] md:text-2xl">
              {translate("skills")}
            </h4>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-4">
            {(locale == "en" ? skillsEnglish : skillsPortuguese).map(
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

        <div className="rounded-3xl border border-[#93a8ac]/30 bg-[#fffaf8]/80 p-5 md:p-7">
          <AnimatedSection classNameInView="animate-fade-down animate-duration-[1700ms]">
            <h4 className="mb-5 text-xl font-bold text-[#1f2d3d] md:text-2xl">
              {translate("certifications")}
            </h4>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-4">
            {(locale == "en"
              ? certificacaoEnglish
              : certificacaoPortuguese
            ).map((job, index) => (
              <JobComponent
                key={index}
                period={job.period}
                company={job.company}
                job={job.job}
                description={job.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCertification;
