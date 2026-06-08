import React from "react";
import { Navigate } from "react-router-dom";
import Body from "../components/landingpage/Body";
import Hero from "../components/landingpage/Hero";
import Section from "../components/landingpage/Section";
import { useCheckAuth } from "../network/auth/queries";
import Preloader from "../components/ui/Preloader";


const Index = () => {
  const { data, isError, isPending, isSuccess } = useCheckAuth();
  const isAuthenticated = data?.authenticated;

  if (isPending) {
    return <Preloader />;
  }

  // if (isError) {
  //   return <div>Something went wrong...</div>;
  // }

  if (data?.authenticated) {
    return <Navigate to="/home" replace />;
  }
  return (
    <>
      {/* {isAuthenticated ? "Yeah" : "No"} */}
      <Hero />
      <Body />
      <Section />
    </>
  );
};

export default Index;
