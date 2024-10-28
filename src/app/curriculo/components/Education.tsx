import { education } from "@/data/Education";
import JobComponent from "./Job";

const Education = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start w-full gap-4">
      <h3 className="text-lg md:text-3xl font-semibold ">Educação</h3>
      <div className="flex flex-col gap-16">
        {education.map((job, index) => (
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

export default Education;
