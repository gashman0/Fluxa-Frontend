import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  X,
  Bookmark,
  Settings,
  ArrowUpRight,
  User,
  BriefcaseBusiness,
} from "lucide-react";
import Logout from "../ui/Logout";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location.pathname]);
  const navItems = [
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
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] bg-black/60" onClick={onClose} />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 left-0 z-[100]
          h-screen w-[80%]
          bg-[#2D120D]
          border-r border-[#FFF8CA]/10
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col p-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#FFF8CA]">Fluxa</h2>

              <p className="text-sm text-[#FFF8CA]/60">
                Opportunity Intelligence
              </p>
            </div>

            <button onClick={onClose}>
              <X className="text-[#FFF8CA]" />
            </button>
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

          {/* Rightbar Content */}
          <div className="mt-8 border-t border-[#FFF8CA]/10 pt-6">
            <h3 className="text-sm font-medium text-[#FFF8CA]/60">
              Trending Skills
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {["React", "TypeScript", "AI"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#3A1A14] px-3 py-1 text-sm text-[#FFF8CA]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Pro Card */}
          <div className="mt-auto rounded-2xl border border-[#FFF8CA]/10 bg-[#642409] p-3">
            <h3 className="font-semibold text-[#FFF8CA]">
              Upgrade to Fluxa Pro
            </h3>

            <p className="mt-2 text-sm text-[#FFF8CA]/70">
              Unlock premium opportunity feeds and advanced filters.
            </p>

            <button
              className="
                mt-4 flex w-full items-center justify-center gap-2
                rounded-xl bg-[#FFF8CA]
                px-4 py-2
                font-medium text-[#2D120D]
              "
            >
              Upgrade
              <ArrowUpRight size={16} />
            </button>
          </div>

          <Logout />
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
