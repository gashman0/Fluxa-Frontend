import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#2D120D] px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-bold text-[#FFF8CA]">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-semibold text-white">
          Opportunity Not Found
        </h2>

        <p className="mt-4 text-[#FFF8CA]/70">
          Looks like the page you're looking for
          doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="
              rounded-xl
              bg-[#FFF8CA]
              px-6
              py-3
              font-medium
              text-[#2D120D]
              transition
              hover:opacity-90
            "
          >
            Go Home
          </Link>

          <Link
            to="/home"
            className="
              rounded-xl
              border border-[#FFF8CA]/20
              px-6
              py-3
              text-[#FFF8CA]
              transition
              hover:bg-[#642409]
            "
          >
            Go to Feed
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;