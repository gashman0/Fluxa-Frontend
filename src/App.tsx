import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App