import { Menu, Bell } from "lucide-react";

const MobileHeader = () => {
  return (
    <header
      className="
        sticky top-0 z-40
        flex items-center justify-between
        border-b border-[#FFF8CA]/10
        bg-[#2D120D]/95
        px-4 py-4
        backdrop-blur-md
      "
    >
      {/* Menu */}
      <button
        className="
          flex items-center justify-center
          rounded-lg
          p-2
          text-[#FFF8CA]
          hover:bg-[#3A1A14]
        "
      >
        <Menu size={22} />
      </button>

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/Group.svg"
          alt="Fluxa"
          className="h-8 w-auto"
        />
      </div>

      {/* Search */}
      <button
        className="
          flex items-center justify-center
          rounded-lg
          p-2
          text-[#FFF8CA]
          hover:bg-[#3A1A14]
        "
      >
        <Bell size={20} />
      </button>
    </header>
  );
};

export default MobileHeader;