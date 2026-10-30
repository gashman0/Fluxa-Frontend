
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  X,
  Bookmark,
  Settings,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
} from "lucide-react";

import Logout from "../ui/Logout";
import Modal from "../ui/Modal";
import { useFluxaPro, useMe } from "../../network/me/queries";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  const location = useLocation();

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const { data: me } = useMe();

  const { mutateAsync: initializePayment, isPending } = useFluxaPro();

  const isPro =
    me?.subscription?.plan === "pro" &&
    me?.subscription?.status === "active";

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

  // Close drawer when navigating
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // Prevent background scrolling while drawer is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Initialize Fluxa Pro payment
  const handleUpgrade = async () => {
    try {
      const response = await initializePayment();

      const authorizationUrl = response?.data?.authorizationUrl;

      if (!authorizationUrl) {
        throw new Error("Payment authorization URL was not returned");
      }

      window.location.href = authorizationUrl;
    } catch (error) {
      console.error("Payment initialization failed:", error);
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/60"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed left-0 top-0 z-[100]
          h-dvh w-[80%] max-w-[360px]
          overflow-y-auto overscroll-y-contain
          hide-scrollbar
          border-r border-[#FFF8CA]/10
          bg-[#2D120D]
          transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0 pointer-events-auto"
              : "-translate-x-full pointer-events-none"
          }
        `}
      >
        <div
          className="
            flex min-h-full flex-col
            p-5
            pb-[calc(1.25rem+env(safe-area-inset-bottom))]
          "
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#FFF8CA]">
                Fluxa
              </h2>

              <p className="text-sm text-[#FFF8CA]/60">
                Opportunity Intelligence
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-lg p-2"
            >
              <X className="text-[#FFF8CA]" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-10 flex shrink-0 flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `
                      flex items-center gap-3 rounded-xl
                      px-4 py-3
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

          {/* Trending Skills */}
          <div className="mt-8 shrink-0 border-t border-[#FFF8CA]/10 pt-6">
            <h3 className="text-sm font-medium text-[#FFF8CA]/60">
              Trending Skills
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {["React", "TypeScript", "AI"].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full bg-[#3A1A14]
                    px-3 py-1 text-sm text-[#FFF8CA]
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Pro Card */}
          {isPro ? (
            <div className="mt-auto shrink-0 rounded-2xl border border-[#FFF8CA]/10 bg-[#642409] p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF8CA]">
                  <Check size={15} className="text-[#2D120D]" />
                </div>

                <h3 className="font-semibold text-[#FFF8CA]">
                  Fluxa Pro
                </h3>
              </div>

              <p className="mt-3 text-sm text-[#FFF8CA]/70">
                You're currently enjoying all Fluxa Pro features.
              </p>
            </div>
          ) : (
            <div className="mt-auto shrink-0 rounded-2xl border border-[#FFF8CA]/10 bg-[#642409] p-4">
              <h3 className="font-semibold text-[#FFF8CA]">
                Upgrade to Fluxa Pro
              </h3>

              <p className="mt-2 text-sm text-[#FFF8CA]/70">
                Unlock premium opportunity feeds and advanced filters.
              </p>

              <button
                type="button"
                onClick={() => setIsUpgradeModalOpen(true)}
                className="
                  mt-4 flex w-full items-center justify-center gap-2
                  rounded-xl bg-[#FFF8CA]
                  px-4 py-3
                  font-medium text-[#2D120D]
                  transition hover:opacity-90
                  active:scale-[0.98]
                  touch-manipulation
                "
              >
                Upgrade
                <ArrowUpRight size={16} />
              </button>
            </div>
          )}

          {/* Logout */}
          <div className="mt-6 shrink-0">
            <Logout />
          </div>
        </div>
      </div>

      {/* Upgrade Modal */}
      <Modal
        isOpen={isUpgradeModalOpen}
        onConfirm={handleUpgrade}
        onClose={() => setIsUpgradeModalOpen(false)}
        title="Upgrade to Fluxa Pro"
        description="Unlock more powerful tools to help you discover the right opportunities."
        confirmText={isPending ? "Initializing..." : "Continue to payment"}
        cancelText="Maybe later"
        isLoading={isPending}
      >
        <div className="space-y-5">
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

          <div className="border-t border-[#FFF8CA]/10 pt-4">
            <p className="text-sm text-[#FFF8CA]/60">
              Fluxa Pro
            </p>

            <p className="mt-1 text-2xl font-semibold text-[#FFF8CA]">
              ₦500
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MobileDrawer;
