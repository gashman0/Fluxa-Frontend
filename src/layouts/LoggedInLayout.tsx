import { Navigate, Outlet } from "react-router-dom";
import { useMe } from "../network/me/queries";
import Leftbar from "../components/layouts/Leftbar";
import Rightbar from "../components/layouts/Rightbar";
import Loader from "../components/ui/Loader";
import MobileHeader from "../components/layouts/MobileHeader";
import MobileBottomNav from "../components/layouts/MobileBottomNav";

const LoggedInLayout = () => {
  const { data: me, isPending, isError } = useMe();
  console.log("ME QUERY", {
    me,
    isPending,
    isError,
  });

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
    <div className="min-h-screen bg-[#2D120D] text-white">
      {/* Mobile Header */}
      <div className="lg:hidden">
        <MobileHeader />
      </div>

      <div className="flex h-[calc(100vh-64px)] lg:h-screen">
        {/* Sidebar */}
        <aside className="w-[260px] border-r border-[#FFF8CA]/10 hidden lg:block">
          <Leftbar />
        </aside>

        {/* Main Feed */}
        <main className="flex-1 overflow-y-auto hide-scrollbar">
          <Outlet />
        </main>

        {/* Right Panel */}
      <aside className="hidden xl:block border-l border-[#FFF8CA]/10">
        <Rightbar />
      </aside>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden">
        <MobileBottomNav />
      </div>
    </div>
  );
};

export default LoggedInLayout;
