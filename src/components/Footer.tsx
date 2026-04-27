import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-[#642409] px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo-icon.svg" className="w-8 h-8" />
            <span className="text-white font-semibold text-lg">Fluxa</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Fluxa aggregates job opportunities and hiring signals into one
            clean, personalized feed for developers.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-medium mb-4">Product</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Bookmarks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Applications
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Features
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-medium mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Docs
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-medium mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-[#642409] pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Fluxa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
