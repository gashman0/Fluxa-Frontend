import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  limit: number;
  totalJobs: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

const Pagination = ({
  page,
  limit,
  totalJobs,
  totalPages,
  onPageChange,
  onLimitChange,
}: PaginationProps) => {
  const start = totalJobs === 0 ? 0 : (page - 1) * limit + 1;
  const end = Math.min(page * limit, totalJobs);

  const pageNumbers = useMemo(() => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }

    if (page >= totalPages - 3) {
      return [
        1,
        "...",
        ...Array.from({ length: 5 }, (_, i) => totalPages - 4 + i),
      ];
    }

    return [1, "...", page - 1, page, page + 1, "...", totalPages];
  }, [page, totalPages]);

  //   const buttonStyle = "min-w-8 h-8 px-2 rounded-md text-sm transition-colors";
  const buttonStyle =
    "min-w-8 h-8 px-2 rounded-md text-xs sm:text-sm transition-colors cursor-pointer";

  return (
    <div className="mt-8 border-t border-[#2D120D]/10 pt-5 pb-6">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between text-sm">
        {/* Rows per page */}
        <div className="flex items-center justify-between sm:justify-start gap-3">
          <span className="text-gray-500 whitespace-nowrap">Rows per page</span>

          <select
            value={limit}
            onChange={(e) => onLimitChange(Number(e.target.value))}
            className="bg-white border border-[#2D120D]/20 rounded-md px-2 py-1.5 text-[#2D120D] outline-none focus:border-[#6B0B0C]"
          >
            {[10, 20, 30, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Job count */}
        <p className="text-gray-500 text-center whitespace-nowrap">
          Showing{" "}
          <span className="font-medium text-gray-500">
            {start}–{end}
          </span>{" "}
          of <span className="font-medium text-gray-500">{totalJobs}</span>{" "}
          jobs
        </p>

        {/* Page controls */}
        <div className="flex items-center gap-1 flex-wrap">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className={`${buttonStyle} flex items-center gap-1 border border-[#2D120D]/20 px-3 text-[#FFF8CA] hover:bg-[#6B0B0C] disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>

          {pageNumbers.map((number, index) => {
            if (number === "...") {
              return (
                <span key={`ellipsis-${index}`} className="px-1 text-gray-400">
                  ...
                </span>
              );
            }

            return (
              <button
                key={number}
                onClick={() => onPageChange(Number(number))}
                className={`${buttonStyle} border ${
                  page === number
                    ? "bg-[#6B0B0C] text-[#FFF8CA] border-[#6B0B0C]"
                    : "bg-[#3D1B14] text-[#FFF8CA] border-[#8B5E4C] hover:bg-[#6B0B0C] hover:border-[#6B0B0C]"
                }`}
              >
                {number}
              </button>
            );
          })}

          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages || totalPages === 0}
            className={`${buttonStyle} flex items-center gap-1 border border-[#2D120D]/20 px-3 text-[#FFF8CA] hover:bg-[#6B0B0C] disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
