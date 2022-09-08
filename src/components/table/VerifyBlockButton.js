import React, { useContext } from "react";

import { BsToggleOff, BsToggleOn } from "react-icons/bs";

import { notifySuccess, notifyError } from "../../utils/toast";

import UserServices from "../../services/UserServices";
import { SidebarContext } from "../../context/SidebarContext";

const VerifyBlockButton = ({ id, status }) => {

  const { setIsUpdate } = useContext(SidebarContext);

  const handleChangeStatus = (id) => {
    let newStatus;
    if (status === "blocked") {
      newStatus = "verified";
    } else {
      newStatus = "blocked";
    }
      UserServices.updateStatus(id, { status: newStatus })
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("User Status updated successfully");
        })
        .catch((err) => notifyError(err.message));
  };

  return (
    <span
      className="cursor-pointer text-xl flex justify-center text-center"
      onClick={() => handleChangeStatus(id)}
    >
      {status === "verified" ? (
        <BsToggleOn className="text-green-500" />
      ) : (
        <BsToggleOff className="text-orange-500" />
      )}
    </span>
  );
};

export default VerifyBlockButton;
