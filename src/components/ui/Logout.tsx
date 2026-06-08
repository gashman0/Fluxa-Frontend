import React from "react";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { useLogout } from "../../network/auth/queries";
import Modal from "./Modal";

const Logout = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { mutate } = useLogout();
  const handleLogout = () => {
    mutate();
  };

  return (
    <>
      <button
        className="
        mt-4 flex w-full items-center gap-3
        rounded-xl
        px-4 py-3
        text-red-300
        transition-all
        duration-200
        hover:bg-red-950/30
        hover:text-red-200
        "
        onClick={() =>setShowLogoutModal(true)}
      >
        <LogOut size={18} />
        Logout
      </button>

      <Modal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
        title="Logout"
        description="Are you sure you want to logout from Fluxa?"
        confirmText="Logout"
        variant="danger"
      />
    </>
  );
};

export default Logout;
