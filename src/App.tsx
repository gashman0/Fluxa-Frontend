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
import NotFound from "./pages/NotFound";

import Preloader from "./components/ui/Preloader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/home" element={<LoggedInLayout />}>
        <Route index element={<HomeFeed />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>,
  ),
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
