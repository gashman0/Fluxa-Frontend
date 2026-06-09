import { Navigate, Outlet } from "react-router-dom";
import { useMe } from "../network/me/queries";
import Leftbar from "../components/layouts/Leftbar";
import Rightbar from "../components/layouts/Rightbar";
import Preloader from "../components/ui/Preloader";



const LoggedInLayout = () => {
  console.log("LOGGEDINLAYOUT RENDER");
  const { data: me, isPending, isError } = useMe();

  // Still checking auth state
  // if (isPending) {
  //   return null;
  // }

  if (isPending) {
    console.log("LOGGEDINLAYOUT PENDING");
    return <Preloader />;
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
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-[260px] border-r border-[#FFF8CA]/10">
          <Leftbar />
        </aside>

        {/* Main Feed */}
        <main className="flex-1 overflow-y-auto hide-scrollbar">
          <Outlet />
        </main>

        {/* Right Panel */}
        <aside className="flex overflow-y-auto border-l border-[#FFF8CA]/10 hide-scrollbar">
          <Rightbar />
        </aside>
      </div>
    </div>
  );
};

export default LoggedInLayout;
