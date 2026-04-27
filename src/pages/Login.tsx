import React from "react";

const Login = () => {
  return (
    <section className="w-full min-h-screen bg-black grid md:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-center px-16 relative">
        {/* Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(107,11,12,0.25),transparent_50%)]" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo-icon.svg" className="w-8 h-8" />
            <span className="text-white text-xl font-semibold">Fluxa</span>
          </div>

          <h2 className="text-3xl font-bold text-white leading-snug">
            Welcome back.
          </h2>

          <p className="mt-4 text-gray-400 max-w-sm">
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
          <form className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-black border border-[#642409] text-white placeholder-gray-500 focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-black border border-[#642409] text-white placeholder-gray-500 focus:outline-none"
            />

            {/* Forgot password */}
            <div className="text-right text-sm">
              <a href="#" className="text-gray-400 hover:text-white">
                Forgot password?
              </a>
            </div>

            {/* CTA */}
            <button className="w-full bg-[#6B0B0C] hover:bg-[#4A0708] text-white py-3 rounded-md font-medium">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3 text-gray-500 text-sm">
            <div className="flex-1 h-[1px] bg-[#642409]" />
            OR
            <div className="flex-1 h-[1px] bg-[#642409]" />
          </div>

          {/* Google */}
          <button className="w-full border border-[#642409] py-3 rounded-md text-gray-300 hover:text-white">
            Continue with Google
          </button>

          {/* Footer */}
          <p className="mt-6 text-center text-gray-400 text-sm">
            Don’t have an account?{" "}
            <span className="text-white cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
