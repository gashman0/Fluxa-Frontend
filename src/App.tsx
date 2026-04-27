import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Index />} />
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