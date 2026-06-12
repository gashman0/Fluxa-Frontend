const Discover = () => {
  const news = [
    {
      title: "AI continues to reshape software engineering",
      category: "Artificial Intelligence",
      readTime: "4 min read",
    },
    {
      title: "Remote engineering jobs increase globally",
      category: "Careers",
      readTime: "3 min read",
    },
    {
      title: "TypeScript remains one of the most demanded skills",
      category: "Frontend",
      readTime: "5 min read",
    },
  ];

  const skills = [
    "React",
    "TypeScript",
    "AI",
    "Cybersecurity",
    "AWS",
    "Node.js",
  ];

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#FFF8CA]">
          Discover
        </h1>

        <p className="mt-2 text-[#FFF8CA]/60">
          Stay updated with the latest trends in tech.
        </p>
      </div>

      {/* Trending News */}
      <section className="mt-8">
        {/* <h2 className="text-xl font-semibold text-[#FFF8CA]">
          🔥 Trending Today
        </h2> */}

        <div className="mt-4 space-y-4">
          {news.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border border-[#FFF8CA]/10
                bg-[#3A1A14]
                p-5
              "
            >
              <span className="text-xs text-[#FFF8CA]/50">
                {item.category}
              </span>

              <h3 className="mt-2 text-lg font-semibold text-[#FFF8CA]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-[#FFF8CA]/50">
                {item.readTime}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Trends */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#FFF8CA]">
           Hiring Trends
        </h2>

        <div className="mt-4 space-y-3">
          {[
            "AI startups are hiring aggressively",
            "Remote frontend roles continue to grow",
            "Cloud engineers remain highly sought after",
          ].map((trend) => (
            <div
              key={trend}
              className="
                rounded-xl
                bg-[#3A1A14]
                border border-[#FFF8CA]/10
                p-4
                text-[#FFF8CA]
              "
            >
              {trend}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[#FFF8CA]">
          Skills In Demand
        </h2>

        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                bg-[#642409]
                px-4
                py-2
                text-sm
                text-[#FFF8CA]
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;