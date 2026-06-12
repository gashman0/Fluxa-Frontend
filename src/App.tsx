import { useEffect, useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import LoggedInLayout from "./layouts/LoggedInLayout";

import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HomeFeed from "./pages/HomeFeed";
import Saved from "./pages/Saved";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
import Settings from "./pages/Settings";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

import Preloader from "./components/ui/Preloader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<MainLayout />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<Index />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route
        element={<LoggedInLayout />}
        errorElement={<ErrorPage />}
      >
        <Route path="/home" element={<HomeFeed />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/messages" element={<Messages />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

const App = () => {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("fluxa-preloader");

    if (!hasSeenPreloader) {
      setShowPreloader(true);

      const timer = setTimeout(() => {
        setShowPreloader(false);

        sessionStorage.setItem("fluxa-preloader", "true");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  if (showPreloader) {
    return <Preloader />;
  }

  return <RouterProvider router={router} />;
};



export default App;
