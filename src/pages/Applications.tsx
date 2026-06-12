const Applications = () => {
  const applications = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      company: "Stripe",
      status: "Applied",
      appliedAt: "2 days ago",
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "Vercel",
      status: "Interview",
      appliedAt: "5 days ago",
    },
    {
      id: 3,
      title: "Product Engineer",
      company: "Notion",
      status: "Offer",
      appliedAt: "1 week ago",
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "Linear",
      status: "Rejected",
      appliedAt: "2 weeks ago",
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Applied":
        return "bg-yellow-500/15 text-yellow-300 border border-yellow-500/20";

      case "Interview":
        return "bg-blue-500/15 text-blue-300 border border-blue-500/20";

      case "Offer":
        return "bg-green-500/15 text-green-300 border border-green-500/20";

      case "Rejected":
        return "bg-red-500/15 text-red-300 border border-red-500/20";

      default:
        return "bg-[#642409] text-[#FFF8CA]";
    }
  };

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#FFF8CA]">
          Applications
        </h1>

        <p className="mt-2 text-[#FFF8CA]/60">
          Track every opportunity you've applied for.
        </p>
      </div>

      {/* Overview */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-[#3A1A14] border border-[#FFF8CA]/10 p-5">
          <p className="text-sm text-[#FFF8CA]/60">Applied</p>
          <h3 className="mt-2 text-3xl font-bold text-[#FFF8CA]">
            12
          </h3>
        </div>

        <div className="rounded-2xl bg-[#3A1A14] border border-[#FFF8CA]/10 p-5">
          <p className="text-sm text-[#FFF8CA]/60">Interview</p>
          <h3 className="mt-2 text-3xl font-bold text-blue-300">
            3
          </h3>
        </div>

        <div className="rounded-2xl bg-[#3A1A14] border border-[#FFF8CA]/10 p-5">
          <p className="text-sm text-[#FFF8CA]/60">Offers</p>
          <h3 className="mt-2 text-3xl font-bold text-green-300">
            1
          </h3>
        </div>

        <div className="rounded-2xl bg-[#3A1A14] border border-[#FFF8CA]/10 p-5">
          <p className="text-sm text-[#FFF8CA]/60">Rejected</p>
          <h3 className="mt-2 text-3xl font-bold text-red-300">
            2
          </h3>
        </div>
      </div>

      {/* Applications List */}
      <div className="mt-8 space-y-4">
        {applications.map((application) => (
          <div
            key={application.id}
            className="
              rounded-2xl
              border border-[#FFF8CA]/10
              bg-[#3A1A14]
              p-5
              transition
              hover:border-[#FFF8CA]/20
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-[#FFF8CA]">
                  {application.title}
                </h3>

                <p className="mt-1 text-[#FFF8CA]/70">
                  {application.company}
                </p>

                <p className="mt-3 text-sm text-[#FFF8CA]/50">
                  Applied {application.appliedAt}
                </p>
              </div>

              <span
                className={`
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-medium
                  ${getStatusStyles(application.status)}
                `}
              >
                {application.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;