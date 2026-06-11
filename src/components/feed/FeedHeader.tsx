import { Search } from "lucide-react";

const FeedHeader = () => {
  const filters = [
    "Remote",
    "Full-Time",
    "Engineering",
  ];

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="hidden lg:block"> 
        <h1 className="text-3xl font-bold text-[#FFF8CA]">
          Good Evening 
        </h1>

        <p className="mt-2 text-[#FFF8CA]/60">
          12 opportunities match your profile today.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFF8CA]/50"
        />

        <input
          type="text"
          placeholder="Search opportunities, companies, skills..."
          className="
            w-full
            rounded-2xl
            border border-[#FFF8CA]/10
            bg-[#3A1A14]
            py-4
            pl-12
            pr-4
            text-[#FFF8CA]
            placeholder:text-[#FFF8CA]/40
            outline-none
            transition
            focus:border-[#FFF8CA]/30
          "
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            className="
              rounded-full
              bg-[#3A1A14]
              px-4
              py-2
              text-sm
              text-[#FFF8CA]
              border border-[#FFF8CA]/10
              transition
              hover:bg-[#642409]
            "
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedHeader;