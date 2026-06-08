import FeedHeader from "../components/feed/FeedHeader";
import OpportunityCard from "../components/layouts/OpportunityCard";

const HomeFeed = () => {
  return (
    <div className="p-8">
      <FeedHeader />
      <div className="mt-8 space-y-5">
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
      </div>
    </div>
  );
};

export default HomeFeed;
