import React from "react";
import { TableBody, TableRow, TableCell } from "@windmill/react-ui";

import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";

import OptionDrawer from "../drawer/OptionDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";

const OptionTable = ({ options }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <OptionDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {options?.map((option) => (
          <TableRow key={option._id}>
            <TableCell>
              <span className="text-sm">{option.label}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{option.value}</span>
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={option._id}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default OptionTable;
