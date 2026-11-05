import { useState, useEffect } from "react";
import FeedHeader from "../components/feed/FeedHeader";
import OpportunityCard from "../components/layouts/OpportunityCard";
import Pagination from "../components/ui/Pagination";
import FeedLoader from "../components/ui/FeedLoader";
import { useJobs } from "../network/jobs/queries";

const HomeFeed = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Reset pagination when search changes
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const {
    data: jobs,
    isPending,
    isError,
    refetch,
    isFetching,
  } = useJobs({ limit, page, search: debouncedSearch });

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  const jobList = jobs?.jobs ?? [];
  const pagination = jobs?.pagination;

  return (
    <div className="p-4 pb-28 lg:p-8">
      <FeedHeader
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
      />

      {/* Initial Loading State */}
      {isPending && <FeedLoader />}

      {/* Error State */}
      {!isPending && isError && !jobs && (
        <div className="min-h-[400px] flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#6B0B0C]/10 flex items-center justify-center">
              <span className="text-3xl text-[#6B0B0C]">!</span>
            </div>

            <h2 className="text-xl font-semibold text-white mb-2">
              Unable to load opportunities
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Something went wrong while fetching job opportunities. Please
              check your connection and try again.
            </p>

            <button
              onClick={() => refetch()}
              disabled={isFetching}
              className="px-6 py-2.5 rounded-lg bg-[#6B0B0C] hover:bg-[#850F10] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
            >
              {isFetching ? "Retrying..." : "Try again"}
            </button>
          </div>
        </div>
      )}

      {/* Background Refetch Error */}
      {!isPending && isError && jobs && (
        <div className="mt-6 p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm text-yellow-500">
            We couldn't refresh your opportunities. Showing previously loaded
            results.
          </p>

          <button
            onClick={() => refetch()}
            disabled={isFetching}
            className="text-sm font-medium text-yellow-500 hover:text-yellow-400 disabled:opacity-50"
          >
            {isFetching ? "Retrying..." : "Retry"}
          </button>
        </div>
      )}

      {/* Opportunities and Empty State */}
      {!isPending && !isError && (
        <>
          {jobList.length > 0 ? (
            <div className="mt-8 space-y-5">
              {jobList.map((job) => (
                <OpportunityCard key={job._id} job={job} />
              ))}
            </div>
          ) : (
            <div className="mt-12 py-16 px-6 text-center rounded-xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-lg font-semibold text-white mb-2">
                No opportunities found
              </h2>

              <p className="text-sm text-gray-400 max-w-sm mx-auto">
                There are currently no opportunities to display. Check back
                later for new openings.
              </p>
            </div>
          )}

          {/* Pagination */}
          {pagination && pagination.totalJobs > 0 && (
            <Pagination
              page={page}
              limit={limit}
              totalJobs={pagination.totalJobs}
              totalPages={pagination.totalPages}
              onPageChange={setPage}
              onLimitChange={handleLimitChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default HomeFeed;
