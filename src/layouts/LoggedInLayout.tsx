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

  if(mePending){
    return(
      <div>
        Pending...
      </div>
    )
  }

  if(meError || !me){
    return <Navigate to={'/login'} replace/>
  }
  return (
    <div>
        {me?.name} <br />
        {me?.email}
      <Outlet />
    </div>
  );
};

export default LoggedInLayout;
