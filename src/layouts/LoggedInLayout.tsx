import React from "react";
import { Outlet } from "react-router-dom";
import { useMe } from "../network/me/queries";


const LoggedInLayout = () => {
  const {
    data: user,
    isPending: mePending,
    isError: meError,
    isSuccess: meSuccess,
  } = useMe();
  return (
    <div>
        {user?.name}
      <Outlet />
    </div>
  );
};

export default LoggedInLayout;
