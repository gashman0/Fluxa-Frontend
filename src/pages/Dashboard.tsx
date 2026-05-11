import React from "react";
import { useLogout } from "../network/auth/queries";

const Dashboard = () => {
  const {mutate} = useLogout();
  const handleLogout = () => {
    mutate();
  };
  
  return (
    <>
      <div>dashboard</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Dashboard;
