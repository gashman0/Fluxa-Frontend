const Rightbar = () => {
  return (
    <div className="h-full px-5 py-6">
      <div className="space-y-5">
        {/* Trending Skills */}
        <section
          className="
            rounded-2xl
            border border-[#FFF8CA]/10
            bg-[#3A1A14]
            p-5
          "
        >
          <h3 className="text-lg font-semibold text-[#FFF8CA]">
            Trending Skills
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "AI",
              "Python",
              "Next.js",
            ].map((skill) => (
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
        </section>

        {/* Hiring This Week */}
        <section
          className="
            rounded-2xl
            border border-[#FFF8CA]/10
            bg-[#3A1A14]
            p-5
          "
        >
          <h3 className="text-lg font-semibold text-[#FFF8CA]">
            Hiring This Week
          </h3>

          <div className="mt-4 space-y-4">
            {[
              "Google",
              "Stripe",
              "Vercel",
              "Notion",
              "Linear",
            ].map((company) => (
              <div
                key={company}
                className="
                  flex items-center justify-between
                  rounded-xl
                  bg-[#642409]/30
                  px-3
                  py-2
                "
              >
                <span className="text-[#FFF8CA]">
                  {company}
                </span>

                <span className="text-xs text-[#FFF8CA]/60">
                  Active
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section
          className="
            rounded-2xl
            border border-[#FFF8CA]/10
            bg-[#3A1A14]
            p-5
          "
        >
          <h3 className="text-lg font-semibold text-[#FFF8CA]">
            Recommended For You
          </h3>

          <div className="mt-4 space-y-4">
            {[
              "Senior Frontend Engineer",
              "Product Designer",
              "Developer Advocate",
              "Technical Writer",
            ].map((role) => (
              <div
                key={role}
                className="
                  rounded-xl
                  bg-[#642409]/30
                  px-3
                  py-3
                "
              >
                <p className="text-sm text-[#FFF8CA]">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rightbar;