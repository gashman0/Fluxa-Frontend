import { useState } from "react";
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
import Modal from "../ui/Modal";
import { useFluxaPro } from "../../network/me/queries";

const Leftbar = () => {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

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

  const { mutateAsync: initializePayment, isPending } = useFluxaPro();

  const handleUpgrade = async () => {
    console.log("Continue to payment clicked");

    try {
      const response = await initializePayment();

      const authorizationUrl = response?.data?.authorizationUrl;
      console.log("This is the url to navigate to:", authorizationUrl)
      window.location.href = authorizationUrl;
    } catch (error) {
      console.error("Payment initialization failed:", error);
    }
  };

  return (
    <>
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
            type="button"
            onClick={() => setIsUpgradeModalOpen(true)}
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

      {/* Upgrade Modal */}
      <Modal
        isOpen={isUpgradeModalOpen}
        onConfirm={handleUpgrade}
        onClose={() => setIsUpgradeModalOpen(false)}
        title="Upgrade to Fluxa Pro"
        description="Unlock more powerful tools to help you discover the right opportunities."
        confirmText="Continue to payment"
        cancelText="Maybe later"
      >
        <div className="space-y-5">
          {/* Benefits */}
          <div>
            <p className="mb-3 text-sm font-medium text-[#FFF8CA]">
              With Fluxa Pro, you get:
            </p>

            <div className="space-y-3 text-sm text-[#FFF8CA]/80">
              <p>✓ Premium opportunity feeds</p>
              <p>✓ Smart recommendations</p>
              <p>✓ Advanced filters</p>
              <p>✓ More powerful job discovery</p>
            </div>
          </div>

          {/* Price */}
          <div className="border-t border-[#FFF8CA]/10 pt-4">
            <p className="text-sm text-[#FFF8CA]/60">Fluxa Pro</p>

            <p className="mt-1 text-2xl font-semibold text-[#FFF8CA]">₦500</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Leftbar;
