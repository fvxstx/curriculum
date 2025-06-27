import { IJob } from "@/data/Jobs";

const JobComponent = ({ period, job, company, description }: IJob) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-10">
      {period && <p className="min-w-[137px]">{period}</p>}
      <div>
        <h4 className="font-bold">{job}</h4>
        <p className="max-w-[450px] italic my-1">{company}</p>
        <div className="max-w-[450px]">
          {description.map((x) => (
            <p key={x} className="max-w-[450px]">
              {x}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobComponent;
