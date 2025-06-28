import { jobsEnglish, jobsPortuguese } from "@/data/Jobs";
import JobComponent from "./Job";
import { getLocale, getTranslations } from "next-intl/server";

const ExProfissional = async () => {
  const translate = await getTranslations("Experiences");
  const locale = await getLocale();

  return (
    <section className="flex flex-col md:flex-row justify-between items-start w-full gap-4 relative">
      <h3 className="text-2xl md:text-3xl font-semibold md:sticky md:top-24">
        {translate("professional")}
      </h3>
      <div className="flex flex-col gap-16">
        {(locale == "en" ? jobsEnglish : jobsPortuguese).map((job, index) => (
          <JobComponent
            key={index}
            period={job.period}
            company={job.company}
            job={job.job}
            description={job.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ExProfissional;
