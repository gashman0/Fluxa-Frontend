import { Bookmark, MapPin, Clock3 } from "lucide-react";
import type { Job } from "../../network/jobs/types";

interface OpportunityCardProps {
  job: Job;
}

const OpportunityCard = ({ job }: OpportunityCardProps) => {
  const getTimeAgo = (date: string) => {
    const now = new Date();
    const published = new Date(date);

    const diffInSeconds = Math.floor(
      (now.getTime() - published.getTime()) / 1000
    );

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;

    return published.toLocaleDateString();
  };

  return (
    <div
      className="
        rounded-2xl
        border border-[#FFF8CA]/10
        bg-[#3A1A14]
        p-6
        transition-all
        duration-200
        hover:border-[#FFF8CA]/20
        hover:-translate-y-[2px]
      "
    >
      {/* Company */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#FFF8CA]/70">
            {job.company}
          </p>

          <h2 className="mt-1 text-xl font-semibold text-white">
            {job.title}
          </h2>
        </div>

        <button
          className="
            rounded-full
            border border-[#FFF8CA]/10
            p-2
            text-[#FFF8CA]
            hover:bg-[#642409]
          "
        >
          <Bookmark size={18} />
        </button>
      </div>

      {/* Meta */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#FFF8CA]/60">
        <div className="flex items-center gap-1">
          <MapPin size={14} />
          {job.location}
        </div>

        <div className="flex items-center gap-1">
          <Clock3 size={14} />
          {getTimeAgo(job.publishedAt)}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-[#FFF8CA]/50">
          Posted {getTimeAgo(job.publishedAt)}
        </span>

        <div className="flex gap-3">
          <button
            className="
              rounded-xl
              border border-[#FFF8CA]/10
              px-4
              py-2
              text-[#FFF8CA]
              hover:bg-[#642409]
            "
          >
            Save
          </button>

          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              bg-[#FFF8CA]
              px-4
              py-2
              font-medium
              text-[#2D120D]
              hover:opacity-90
            "
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;