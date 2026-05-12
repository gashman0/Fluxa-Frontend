import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useMe } from "../network/me/queries";

const LoggedInLayout = () => {
  const {
    data: me,
    isPending: mePending,
    isError: meError,
    isSuccess: meSuccess,
  } = useMe();

  console.log({ me, meError, mePending });

  if (mePending) {
    return <div>Pending...</div>;
  }

  if (mePending) {
    return <div>Loading...</div>;
  }

  if (meError) {
    return <div>Session recovery failed...</div>;
  }

  if (!me) {
    return <Navigate to="/login" replace />;
  }
  console.log({ me, meError, mePending });
  return (
    <div>
      {me?.name} <br />
      {me?.email}
      <Outlet />
    </div>
  );
};

export default LoggedInLayout;
