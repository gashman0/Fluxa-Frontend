import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
  const error = useRouteError();

  let title = "Something went wrong";
  let message =
    "An unexpected error occurred. Please try again.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status}`;
    message = error.statusText;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <img
        src="/Group.svg"
        alt="Fluxa"
        className="mb-8 h-16"
      />

      <h1 className="text-4xl font-bold text-[#FFF8CA]">
        {title}
      </h1>

      <p className="mt-4 max-w-md text-[#FFF8CA]/70">
        {message}
      </p>

      <button
        onClick={() => navigate('/')}
        className="
          mt-8
          rounded-xl
          bg-[#6B0B0C]
          px-6 py-3
          text-white
          hover:bg-[#4A0708]
        "
      >
        Reload Page
      </button>
    </div>
  );
};

export default ErrorPage;