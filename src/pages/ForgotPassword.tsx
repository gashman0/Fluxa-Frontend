import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/ui/Spinner";
import { useForgotPassword } from "../network/auth/queries";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const {
    mutate,
    isPending,
    isSuccess,
  } = useForgotPassword();

  const isFormValid = Boolean(email.trim());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) return;

    mutate({ email });
  };

  return (
    <section className="w-full min-h-screen bg-black grid md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-center px-16 relative">

        {/* Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(107,11,12,0.25),transparent_50%)]" />

        <div className="relative z-10 flex flex-col items-center">

          <div className="flex items-center gap-2 mb-6">
            <img
              src="/Group.svg"
              className="w-80 h-50"
              alt="Fluxa"
            />
          </div>

          <h2 className="text-6xl font-bold text-white leading-snug text-center">
            Forgot your password?
          </h2>

          <p className="mt-4 text-gray-400 text-center max-w-md">
            No worries. Enter your email and we'll send you a secure
            link to reset your password.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-[#2D120D] border border-[#642409] rounded-xl p-8">

          {isSuccess ? (

            /* SUCCESS STATE */
            <div className="text-center">

              <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[#6B0B0C] flex items-center justify-center">
                <span className="text-white text-2xl">
                  ✓
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-white">
                Check your email
              </h2>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                If an account exists with{" "}
                <span className="text-white">
                  {email}
                </span>
                , we've sent you a password reset link.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                The link will expire in 15 minutes.
              </p>

              <button
                type="button"
                onClick={() => navigate("/login")}
                className="mt-6 w-full py-3 rounded-md bg-[#6B0B0C] hover:bg-[#4A0708] text-white font-medium"
              >
                Back to login
              </button>

            </div>

          ) : (

            /* FORM STATE */
            <>
              <h2 className="text-2xl font-semibold text-white text-center">
                Reset your password
              </h2>

              <p className="mt-2 text-sm text-gray-400 text-center">
                Enter the email associated with your account.
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={handleSubmit}
              >

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-md bg-black border border-[#642409] text-white placeholder-gray-500 focus:outline-none"
                />

                <button
                  type="submit"
                  disabled={!isFormValid || isPending}
                  className={`w-full py-3 rounded-md font-medium flex justify-center ${
                    !isFormValid || isPending
                      ? "bg-[#B85A5B] cursor-not-allowed"
                      : "bg-[#6B0B0C] hover:bg-[#4A0708] text-white"
                  }`}
                >
                  {isPending ? (
                    <Spinner size={18} />
                  ) : (
                    "Send reset link"
                  )}
                </button>

              </form>

              <p className="mt-6 text-center text-gray-400 text-sm">
                Remember your password?{" "}

                <span
                  className="text-white cursor-pointer hover:underline"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>

              </p>
            </>
          )}

        </div>
      </div>

    </section>
  );
};

export default ForgotPassword;
