import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(107,11,12,0.25),transparent_40%)]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#642409_1px,transparent_1px),linear-gradient(to_bottom,#642409_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Find real job opportunities — faster.
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-lg">
            Fluxa aggregates hiring signals from multiple sources into one
            clean, personalized feed built for developers.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <button className="bg-[#6B0B0C] hover:bg-[#4A0708] text-white px-6 py-3 rounded-md">
              Get Started
            </button>

            <button className="border border-[#642409] text-gray-300 px-6 py-3 rounded-md hover:text-white">
              Explore Jobs
            </button>
          </div>

          {/* Trust hint */}
          <p className="mt-6 text-sm text-gray-500">
            Built for developers. No noise. Just opportunities.
          </p>
        </div>

        {/* RIGHT (Product Preview) */}
        <div className="relative">
          <div className="bg-[#2D120D] border border-[#642409] rounded-xl p-4 shadow-lg">
            <div className="space-y-3">
              <div className="bg-black p-4 rounded-md">
                <p className="text-white font-semibold">Frontend Developer</p>
                <p className="text-gray-400 text-sm">Remote • React</p>
              </div>

              <div className="bg-black p-4 rounded-md">
                <p className="text-white font-semibold">Backend Engineer</p>
                <p className="text-gray-400 text-sm">Node.js • Remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
