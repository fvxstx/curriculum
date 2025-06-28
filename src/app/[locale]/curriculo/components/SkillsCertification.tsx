import {
  certificacaoEnglish,
  certificacaoPortuguese,
} from "@/data/Certificoes";
import JobComponent from "./Job";
import { skillsEnglish, skillsPortuguese } from "@/data/Skills";
import { getLocale, getTranslations } from "next-intl/server";

const SkillsCertification = async () => {
  const translate = await getTranslations("Experiences");
  const locale = await getLocale();

  return (
    <section className="flex flex-col items-start w-full gap-4">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6">
        {translate("skillCertif")}
      </h3>
      <div className="flex flex-col md:flex-row justify-between items-start w-full gap-4">
        <div className="flex flex-col gap-4">
          <h4 className="text-xl md:text-2xl font-bold">Skills</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
            {(locale == "en" ? skillsEnglish : skillsPortuguese).map(
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
        </div>
        <div className="flex flex-col gap-4 mt-16 md:mt-0">
          <h4 className="text-xl md:text-2xl font-bold">
            {translate("certifications")}
          </h4>
          {(locale == "en" ? certificacaoEnglish : certificacaoPortuguese).map(
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
      </div>
    </section>
  );
};

export default SkillsCertification;
