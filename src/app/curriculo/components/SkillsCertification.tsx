import { certificacao } from "@/data/Certificoes";
import JobComponent from "./Job";
import { skills } from "@/data/Skills";

const SkillsCertification = () => {
  return (
    <section className="flex flex-col items-start w-full gap-4">
      <h3 className="text-xl md:text-3xl font-semibold mb-6">
        Skills & Cerficações
      </h3>
      <div className="flex flex-col md:flex-row justify-around items-start w-full gap-4">
        <div className="flex flex-col gap-5">
          <h4 className="text-xl md:text-2xl font-bold">Skills</h4>
          {skills.map((job, index) => (
            <JobComponent
              key={index}
              period={job.period}
              company={job.company}
              job={job.job}
              description={job.description}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5 mt-16 md:mt-0">
          <h4 className="text-xl md:text-2xl font-bold">Certificação</h4>
          {certificacao.map((job, index) => (
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
    </section>
  );
};

export default SkillsCertification;
