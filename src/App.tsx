import { useState, useEffect } from "react";
import api from "./api/axios";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoggedInLayout from "./layouts/LoggedInLayout";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
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
        {/* <Route index element={<Dashboard />} /> */}
        <Route index element={<HomeFeed />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
)

const App = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {

    const restoreSession = async () => {

      try {

        // silently restore access token using refresh token
        await api.post("/refresh");

        // console.log("Session restored");

      } catch (error) {

        // console.log("No active session");

      } finally {

        setLoading(false);

      }
    };

    restoreSession();

  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <RouterProvider router={router} />
  )
}

export default App