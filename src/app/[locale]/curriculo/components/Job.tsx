import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { IJob } from "@/data/Jobs";

interface JobComponentProps extends IJob {
  variant?: "default" | "timeline";
}

const JobComponent = ({
  period,
  job,
  company,
  description,
  variant = "default",
}: JobComponentProps) => {
  const filteredDescription = description.filter(
    (item) => item.trim().length > 0,
  );

  if (variant === "timeline") {
    return (
      <AnimatedSection
        baseClassName="relative pl-8 md:pl-10"
        classNameInView="animate-fade-left animate-duration-[1400ms]"
      >
        <span className="absolute left-[1px] top-5 flex h-4 w-4 items-center justify-center md:left-[3px]">
          <span className="absolute h-4 w-4 rounded-full bg-[#ff9472]/50 animate-ping animate-duration-[2600ms]" />
          <span className="relative h-3.5 w-3.5 rounded-full border-2 border-white bg-[#1f2d3d] shadow-md" />
        </span>

        <article className="group rounded-2xl border border-[#93a8ac]/30 bg-white/80 p-5 shadow-[0_16px_30px_rgba(66,75,84,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(66,75,84,0.18)] md:p-6">
          {period && (
            <p className="mb-3 inline-flex rounded-full border border-[#424b54]/20 bg-[#f4f8ff] px-3 py-1 text-xs font-semibold tracking-wide text-[#334155]">
              {period}
            </p>
          )}

          <h4 className="text-xl font-bold text-[#17222f]">{job}</h4>
          {company && (
            <p className="mt-1 text-sm font-medium italic text-[#4f6173]">
              {company}
            </p>
          )}

          {filteredDescription.length > 0 && (
            <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-[#334155] md:text-base">
              {filteredDescription.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          )}
        </article>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection
      baseClassName="group rounded-2xl border border-[#93a8ac]/25 bg-white/75 p-4 md:p-5"
      classNameInView="animate-fade-left animate-duration-[1500ms]"
    >
      {period && (
        <p className="mb-2 w-fit rounded-full border border-[#424b54]/20 bg-[#f4f8ff] px-3 py-1 text-xs font-semibold tracking-wide text-[#334155]">
          {period}
        </p>
      )}
      <div className="space-y-1">
        <h4 className="font-bold text-[#17222f]">{job}</h4>
        {company && <p className="italic text-[#4f6173]">{company}</p>}

        {filteredDescription.length > 0 && (
          <div className="pt-2 text-sm text-[#334155] md:text-base">
            {filteredDescription.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default JobComponent;
