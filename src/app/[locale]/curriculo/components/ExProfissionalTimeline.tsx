"use client";

import { IJob } from "@/data/Jobs";
import { useState } from "react";
import JobComponent from "./Job";

interface ExProfissionalTimelineProps {
  jobs: IJob[];
  seeMoreLabel: string;
  initialVisible?: number;
}

const ExProfissionalTimeline = ({
  jobs,
  seeMoreLabel,
  initialVisible = 3,
}: ExProfissionalTimelineProps) => {
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const visibleJobs = jobs.slice(0, visibleCount);
  const hasMore = visibleCount < jobs.length;

  return (
    <>
      <div className="flex flex-col gap-8 md:gap-10">
        {visibleJobs.map((job, index) => (
          <JobComponent
            key={`${job.company}-${job.job}-${index}`}
            period={job.period}
            company={job.company}
            job={job.job}
            description={job.description}
            variant="timeline"
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center md:mt-10">
          <button
            type="button"
            onClick={() => setVisibleCount(jobs.length)}
            className="rounded-full border border-[#93a8ac]/45 bg-white/80 px-6 py-2.5 text-sm font-semibold text-[#334155] transition hover:-translate-y-0.5 hover:bg-[#f2f8fb]"
          >
            {seeMoreLabel}
          </button>
        </div>
      )}
    </>
  );
};

export default ExProfissionalTimeline;
