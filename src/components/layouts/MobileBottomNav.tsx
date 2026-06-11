import { Home, Bookmark, BriefcaseBusiness, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileBottomNav = () => {
  const navItems = [
    {
      label: "Home",
      icon: Home,
      path: "/home",
    },
    {
      label: "Saved",
      icon: Bookmark,
      path: "/saved",
    },
    {
      label: "Applications",
      icon: BriefcaseBusiness,
      path: "/applications",
    },
    {
      label: "Profile",
      icon: User,
      path: "/profile",
    },
  ];

  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t border-[#FFF8CA]/10
        bg-[#2D120D]
        backdrop-blur-md
      "
    >
      <div className="flex items-center justify-around py-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                  flex flex-col items-center gap-1
                  transition-colors
                  ${
                    isActive
                      ? "text-[#FFF8CA]"
                      : "text-[#FFF8CA]/50"
                  }
                `
              }
            >
              <Icon size={20} />
              <span className="text-xs">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;