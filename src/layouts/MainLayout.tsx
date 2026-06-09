import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";
import { useMe } from "../network/me/queries";

const MainLayout = () => {
  const { data: me, isPending } = useMe();

  if (isPending) {
    return null;
  }

  if (me) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
