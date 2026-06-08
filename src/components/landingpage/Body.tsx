import React from 'react'

const Body = () => {
  return (
    <section className="w-full bg-black py-24 px-6">

  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold text-white">
      A better way to discover opportunities
    </h2>

    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
      Fluxa eliminates noise by bringing relevant job opportunities and hiring
      signals into one intelligent, developer-focused system.
    </p>

  </div>

  {/* Cards */}
  <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-[#2D120D] border border-[#642409] rounded-xl p-6 hover:shadow-lg transition">

      <div className="mb-4 w-10 h-10 bg-[#6B0B0C] rounded-md flex items-center justify-center text-white font-bold">
        1
      </div>

      <h3 className="text-white font-semibold text-lg">
        Aggregated Signals
      </h3>

      <p className="mt-3 text-gray-400 text-sm">
        Pulls job opportunities from multiple sources into one unified feed.
      </p>

    </div>

    {/* Card 2 */}
    <div className="bg-[#2D120D] border border-[#642409] rounded-xl p-6 hover:shadow-lg transition">

      <div className="mb-4 w-10 h-10 bg-[#6B0B0C] rounded-md flex items-center justify-center text-white font-bold">
        2
      </div>

      <h3 className="text-white font-semibold text-lg">
        Intelligent Filtering
      </h3>

      <p className="mt-3 text-gray-400 text-sm">
        Surfaces only relevant opportunities based on your skills and interests.
      </p>

    </div>

    {/* Card 3 */}
    <div className="bg-[#2D120D] border border-[#642409] rounded-xl p-6 hover:shadow-lg transition">

      <div className="mb-4 w-10 h-10 bg-[#6B0B0C] rounded-md flex items-center justify-center text-white font-bold">
        3
      </div>

      <h3 className="text-white font-semibold text-lg">
        Application Tracking
      </h3>

      <p className="mt-3 text-gray-400 text-sm">
        Stay organized and track every opportunity from discovery to decision.
      </p>

    </div>

  </div>

</section>
  )
}

export default Body