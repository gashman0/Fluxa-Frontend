import { NavLink } from "react-router-dom";
import {
  House,
  Compass,
  Bookmark,
  BriefcaseBusiness,
  User,
  Settings,
  ArrowUpRight,
} from "lucide-react";
import Logout from "../ui/Logout";

const Leftbar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/home",
      icon: House,
    },
    {
      name: "Discover",
      path: "/discover",
      icon: Compass,
    },
    {
      name: "Saved",
      path: "/saved",
      icon: Bookmark,
    },
    {
      name: "Applications",
      path: "/applications",
      icon: BriefcaseBusiness,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="flex h-full flex-col px-5 py-6">
      {/* Logo */}
      <div>
        <div className="flex w-fit gap-4">
          <img src="/Group.svg" alt="Fluxa Logo" className="h-8" />
          <h1 className="text-2xl font-bold tracking-tight text-[#FFF8CA]">
            Fluxa
          </h1>
        </div>

        <p className="mt-1 text-sm text-[#FFF8CA]/60">
          Opportunity Intelligence
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-10 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `
                flex items-center gap-3 rounded-xl px-4 py-3
                transition-all duration-200

                ${
                  isActive
                    ? "bg-[#6B0B0C] text-[#FFF8CA]"
                    : "text-[#FFF8CA]/70 hover:bg-[#642409] hover:text-[#FFF8CA]"
                }
              `
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Pro Card */}
      <div className="mt-auto rounded-2xl border border-[#FFF8CA]/10 bg-[#642409] p-5">
        <h3 className="font-semibold text-[#FFF8CA]">Upgrade to Fluxa Pro</h3>

        <p className="mt-2 text-sm text-[#FFF8CA]/70">
          Unlock premium opportunity feeds, smart recommendations and advanced
          filters.
        </p>

        <button
          className="
            mt-4 flex w-full items-center justify-center gap-2
            rounded-xl bg-[#FFF8CA]
            px-4 py-3
            font-medium
            text-[#2D120D]
            transition hover:opacity-90
          "
        >
          Upgrade
          <ArrowUpRight size={16} />
        </button>
      </div>

      <Logout />
    </div>
  );
};

export default Leftbar;
