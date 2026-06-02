import React from "react";
import { Navigate } from "react-router-dom";
import Body from "../components/Body";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { useCheckAuth } from "../network/auth/queries";

const Index = () => {
  const { data, isError, isPending, isSuccess } = useCheckAuth();
  const isAuthenticated = data?.authenticated;

  if (isPending) {
    return <div>Loading...</div>;
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
