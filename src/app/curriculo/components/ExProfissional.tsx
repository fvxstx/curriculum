import { jobs } from "@/data/Jobs";
import JobComponent from "./Job";

const ExProfissional = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start w-full gap-4 relative">
      <h3 className="text-xl md:text-3xl font-semibold md:sticky md:top-20">
        Experiência Profissional
      </h3>
      <div className="flex flex-col gap-16">
        {jobs.map((job, index) => (
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
