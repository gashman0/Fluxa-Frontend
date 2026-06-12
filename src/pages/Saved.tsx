const Saved = () => {
  const savedJobs = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      company: "Stripe",
      location: "Remote",
      savedAt: "2 days ago",
    },
    {
      id: 2,
      title: "React Developer",
      company: "Vercel",
      location: "Nigeria",
      savedAt: "5 days ago",
    },
    {
      id: 3,
      title: "Product Engineer",
      company: "Notion",
      location: "Remote",
      savedAt: "1 week ago",
    },
  ];

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#FFF8CA]">
          Saved Opportunities
        </h1>

        <p className="mt-2 text-[#FFF8CA]/60">
          Opportunities you've bookmarked for later.
        </p>
      </div>

      {/* Saved Opportunities */}
      <div className="mt-8 space-y-4">
        {savedJobs.map((job) => (
          <div
            key={job.id}
            className="
              rounded-2xl
              border border-[#FFF8CA]/10
              bg-[#3A1A14]
              p-5
              transition
              hover:border-[#FFF8CA]/20
            "
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#FFF8CA]">
                  {job.title}
                </h3>

                <p className="mt-1 text-[#FFF8CA]/70">
                  {job.company}
                </p>

                <p className="mt-1 text-sm text-[#FFF8CA]/50">
                  {job.location}
                </p>
              </div>

              <span
                className="
                  rounded-full
                  bg-[#642409]
                  px-3 py-1
                  text-xs
                  text-[#FFF8CA]
                "
              >
                Saved
              </span>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-[#FFF8CA]/50">
                Saved {job.savedAt}
              </span>

              <button
                className="
                  rounded-lg
                  bg-[#642409]
                  px-4 py-2
                  text-sm
                  text-[#FFF8CA]
                  hover:bg-[#7a2f0c]
                "
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;