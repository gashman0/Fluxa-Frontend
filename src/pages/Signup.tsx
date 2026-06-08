import { useState } from "react";
import { useSignup } from "../network/auth/queries";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { mutate } = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  
    e.preventDefault();
    mutate(formData);
  }
  return (
    <section className="w-full min-h-screen bg-black grid md:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-center px-16 relative">
        {/* Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(107,11,12,0.25),transparent_50%)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <img src="/Group.svg" className="w-50 h-50" />
            {/* <span className="text-white text-xl font-semibold">Fluxa</span> */}
          </div>

          <h2 className="text-5xl font-bold text-white leading-snug">
            Discover better opportunities.
          </h2>

          <p className="mt-4 text-gray-400">
            Join Fluxa and get a personalized feed of real job opportunities
            tailored to your skills.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-[#2D120D] border border-[#642409] rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white text-center">
            Create your account
          </h2>

          {/* FORM */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md bg-black border border-[#642409] text-white placeholder-gray-500 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-black border border-[#642409] text-white placeholder-gray-500 focus:outline-none"
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-black border border-[#642409] text-white placeholder-gray-500 focus:outline-none"
            />

            {/* CTA */}
            <button className="w-full bg-[#6B0B0C] hover:bg-[#4A0708] text-white py-3 rounded-md font-medium" type="submit">
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3 text-gray-500 text-sm">
            <div className="flex-1 h-[1px] bg-[#642409]" />
            OR
            <div className="flex-1 h-[1px] bg-[#642409]" />
          </div>

          {/* OAuth */}
          <button 
            className="w-full border border-[#642409] py-3 rounded-md text-gray-300 hover:text-white"
            
          >
            Continue with Google
          </button>

          {/* Footer */}
          <p className="mt-6 text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <span className="text-white cursor-pointer" onClick={() => navigate('/login')}>Login</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
