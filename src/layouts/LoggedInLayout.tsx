import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useMe } from "../network/me/queries";
import Leftbar from "../components/layouts/Leftbar";
import Rightbar from "../components/layouts/Rightbar";
import Loader from "../components/ui/Loader";
import MobileHeader from "../components/layouts/MobileHeader";
import MobileBottomNav from "../components/layouts/MobileBottomNav";
import MobileDrawer from "../components/layouts/MobileDrawer";
import ScrollToTop from "../components/utils/ScrollToTop";

const LoggedInLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { data: me, isPending, isError } = useMe();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Still checking auth state
  if (isPending) {
    return <Loader />;
  }

  // User is not authenticated
  if (isError) {
    return <Navigate to="/" replace />;
  }

  // Extra safety check
  if (!me) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ScrollToTop />
      <div className="h-full bg-[#2D120D] text-white">
        

        {/* Mobile Drawer */}
        <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

        {/* Mobile Header */}
        <div className="xl:hidden">
          <MobileHeader onMenuClick={() => setDrawerOpen(true)} />
        </div>

        <div className="flex h-[calc(100vh-64px)] lg:h-screen">
          {/* Sidebar */}
          <aside className="w-[260px] border-r border-[#FFF8CA]/10 hidden xl:block overflow-y-auto hide-scrollbar">
            <Leftbar />
          </aside>

          {/* Main Feed */}
          <main className="flex-1 overflow-y-auto hide-scrollbar" id="main-scroll-container">
            <Outlet />
          </main>

          {/* Right Panel */}
          <aside className="hidden xl:block border-l border-[#FFF8CA]/10 overflow-y-auto hide-scrollbar">
            <Rightbar />
          </aside>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="xl:hidden">
          <MobileBottomNav />
        </div>
      </div>
    </>
  );
};

export default LoggedInLayout;
