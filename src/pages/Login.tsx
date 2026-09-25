import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin, useGoogleAuth } from "../network/auth/queries";
import Spinner from "../components/ui/Spinner";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    mutate,
    isPending: loginPending,
    isError: loginError,
    error,
  } = useLogin();

  const { mutate: googleMutate, isPending: googlePending } = useGoogleAuth();

  const googleButtonRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };

  const isFormValid = Boolean(
    formData.email.trim() && formData.password.trim(),
  );

  useEffect(() => {
    if (!window.google || !googleButtonRef.current) return;

    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,

      callback: (response) => {
        googleMutate(response.credential);
      },
    });

    const width = Math.min(googleButtonRef.current.clientWidth, 400);

    window.google.accounts.id.renderButton(googleButtonRef.current, {
      theme: "outline",
      size: "large",
      width,
      text: "continue_with",
    });
  }, [googleMutate]);

  return (
    <section className="w-full min-h-screen bg-black grid md:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-center px-16 relative">
        {/* Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(107,11,12,0.25),transparent_50%)]" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <img src="/Group.svg" className="w-80 h-50" />
            {/* <span className="text-white text-xl font-semibold">Fluxa</span> */}
          </div>

          <h2 className="text-6xl font-bold text-white leading-snug">
            Welcome back.
          </h2>

          <p className="mt-4 text-gray-400">
            Continue discovering opportunities tailored to your skills.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-[#2D120D] border border-[#642409] rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white text-center">
            Login to your account
          </h2>

          {/* FORM */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-black border border-[#642409] text-white placeholder-gray-500 focus:outline-none"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 pr-12 rounded-md bg-black border border-[#642409] text-white placeholder-gray-500 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {loginError && (
              <div className="mt-4 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
                {error.response?.data?.message ||
                  "Something went wrong. Please try again."}
              </div>
            )}

            {/* Forgot password */}
            <div className="text-right text-sm">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-gray-400 hover:text-white"
              >
                Forgot password?
              </button>
            </div>

            {/* CTA */}
            <button
              type="submit"
              disabled={!isFormValid || loginPending}
              className={`w-full py-3 rounded-md font-medium flex justify-center ${
                !isFormValid || loginPending
                  ? "bg-[#B85A5B] cursor-not-allowed"
                  : "bg-[#6B0B0C] hover:bg-[#4A0708] text-white"
              }`}
            >
              {loginPending ? <Spinner size={18} /> : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3 text-gray-500 text-sm">
            <div className="flex-1 h-[1px] bg-[#642409]" />
            OR
            <div className="flex-1 h-[1px] bg-[#642409]" />
          </div>

          {/* Google */}
          <div
            ref={googleButtonRef}
            className="w-full flex justify-center overflow-hidden"
          />

          {/* Footer */}
          <p className="mt-6 text-center text-gray-400 text-sm">
            Don’t have an account?{" "}
            <span
              className="text-white cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
