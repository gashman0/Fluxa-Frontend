import React from "react";
import { useLogout } from "../network/auth/queries";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const { mutate } = useLogout();


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
