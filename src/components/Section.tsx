import { SlidersHorizontal, Globe, CheckCircle } from "lucide-react";

const Section = () => {
  return (
    <section className="w-full bg-black py-24 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          How Fluxa works
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          A simple system designed to help you discover and track opportunities
          efficiently.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-[#6B0B0C] rounded-full flex items-center justify-center mb-4">
            <SlidersHorizontal className="text-white w-6 h-6" />
          </div>

          <h3 className="text-white font-semibold text-lg">
            Set Your Preferences
          </h3>

          <p className="mt-3 text-gray-400 text-sm max-w-xs">
            Choose your role, skills, and job interests.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-[#6B0B0C] rounded-full flex items-center justify-center mb-4">
            <Globe className="text-white w-6 h-6" />
          </div>

          <h3 className="text-white font-semibold text-lg">
            We Aggregate Opportunities
          </h3>

          <p className="mt-3 text-gray-400 text-sm max-w-xs">
            Fluxa collects job signals from multiple sources in real time.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-[#6B0B0C] rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="text-white w-6 h-6" />
          </div>

          <h3 className="text-white font-semibold text-lg">Discover & Track</h3>

          <p className="mt-3 text-gray-400 text-sm max-w-xs">
            Explore opportunities, save jobs, and track your applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
