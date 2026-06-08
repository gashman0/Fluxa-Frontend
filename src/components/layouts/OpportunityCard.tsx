import { Bookmark, MapPin, Clock3 } from "lucide-react";

const OpportunityCard = () => {
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
            Google
          </p>

          <h2 className="mt-1 text-xl font-semibold text-white">
            Senior Frontend Engineer
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
          Remote
        </div>

        <div className="flex items-center gap-1">
          <Clock3 size={14} />
          Full-Time
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 leading-7 text-[#FFF8CA]/80">
        We are looking for an experienced frontend engineer
        to help build scalable products used by millions of
        users worldwide.
      </p>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {["React", "TypeScript", "Next.js"].map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              bg-[#642409]
              px-3
              py-1
              text-sm
              text-[#FFF8CA]
            "
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-[#FFF8CA]/50">
          Posted 2h ago
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

          <button
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;