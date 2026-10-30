import { useState } from "react";
import FeedHeader from "../components/feed/FeedHeader";
import OpportunityCard from "../components/layouts/OpportunityCard";
import { useJobs } from "../network/jobs/queries";
import Pagination from "../components/ui/Pagination";

const HomeFeed = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const { data: jobs, isPending, isError } = useJobs({ limit, page });

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  return (
    <div className="p-4 pb-28 lg:pb-8">
      <div className="">
        <FeedHeader />
      </div>

      <div className="mt-8 space-y-5">
        {jobs?.jobs.map((job) => (
          <OpportunityCard key={job._id} job={job} />
        ))}
      </div>

      {jobs && (
        <Pagination
          page={page}
          limit={limit}
          totalJobs={jobs.pagination.totalJobs}
          totalPages={jobs.pagination.totalPages}
          onPageChange={setPage}
          onLimitChange={handleLimitChange}
        />
      )}
    </div>
  );
};

export default HomeFeed;
