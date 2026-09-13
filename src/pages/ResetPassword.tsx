import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/ui/Spinner";
import { useResetPassword } from "../network/auth/queries";


const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { mutate, isPending, isSuccess } = useResetPassword();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing again
    setErrorMessage("");
  };

  const passwordsMatch =
    formData.password === formData.confirmPassword;

  const isPasswordValid = formData.password.length >= 8;

  const isFormValid =
    Boolean(token) &&
    isPasswordValid &&
    passwordsMatch;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      setErrorMessage("Invalid password reset link.");
      return;
    }

    if (!isPasswordValid) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    if (!passwordsMatch) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    mutate(
      {
        token,
        password: formData.password,
      },
      {
        onError: (error: any) => {
          setErrorMessage(
            error?.response?.data?.message ||
              "Unable to reset your password. The link may have expired."
          );
        },
      }
    );
  };

  if (isSuccess) {
    return (
      <section className="w-full min-h-screen bg-black flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-[#2D120D] border border-[#642409] rounded-xl p-8 text-center">

          <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[#6B0B0C] flex items-center justify-center">
            <span className="text-white text-2xl">
              ✓
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Password reset successful
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Your password has been changed successfully.
            You can now log in with your new password.
          </p>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="mt-6 w-full py-3 rounded-md bg-[#6B0B0C] hover:bg-[#4A0708] text-white font-medium"
          >
            Continue to login
          </button>

        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-black grid md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-center px-16 relative">

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
            Create a new password.
          </h2>

          <p className="mt-4 text-gray-400 text-center max-w-md">
            Choose a strong password to keep your Fluxa account secure.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-[#2D120D] border border-[#642409] rounded-xl p-8">

          <h2 className="text-2xl font-semibold text-white text-center">
            Reset your password
          </h2>

          <p className="mt-2 text-sm text-gray-400 text-center">
            Enter your new password below.
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={handleSubmit}
          >

            {/* New password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="New password"
              autoComplete="new-password"
              className="w-full px-4 py-3 rounded-md bg-black border border-[#642409] text-white placeholder-gray-500 focus:outline-none"
            />

            {/* Confirm password */}
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              autoComplete="new-password"
              className="w-full px-4 py-3 rounded-md bg-black border border-[#642409] text-white placeholder-gray-500 focus:outline-none"
            />

            {/* Password requirements */}
            <div className="text-sm space-y-1">

              <p
                className={
                  isPasswordValid
                    ? "text-green-400"
                    : "text-gray-500"
                }
              >
                {isPasswordValid ? "✓" : "○"} At least 8 characters
              </p>

              <p
                className={
                  formData.confirmPassword &&
                  passwordsMatch
                    ? "text-green-400"
                    : "text-gray-500"
                }
              >
                {formData.confirmPassword && passwordsMatch
                  ? "✓"
                  : "○"}{" "}
                Passwords match
              </p>

            </div>

            {/* Error */}
            {errorMessage && (
              <p className="text-sm text-red-400">
                {errorMessage}
              </p>
            )}

            {/* Submit */}
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
                "Reset Password"
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

        </div>
      </div>

    </section>
  );
};

export default ResetPassword;