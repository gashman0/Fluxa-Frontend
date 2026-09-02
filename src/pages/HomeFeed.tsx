import FeedHeader from "../components/feed/FeedHeader";
import OpportunityCard from "../components/layouts/OpportunityCard";
import { useJobs } from "../network/jobs/queries";

const HomeFeed = () => {
  const { data: jobs, isPending, isError } = useJobs();

  return (
    <div className="p-8">
      <div className="">
        <FeedHeader />
      </div>

      <div className="mt-8 space-y-5">
        {jobs?.jobs.map((job) => (
          <OpportunityCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HomeFeed;
