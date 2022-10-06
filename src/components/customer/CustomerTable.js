import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';
import { TableCell, TableBody, TableRow} from "@windmill/react-ui";
import { FiEye, FiTrash2 } from "react-icons/fi";
import {  BsTelegram } from "react-icons/bs";
import { Button } from "@windmill/react-ui";
import requestPhoneNumber from '../../hooks/useCustomerSubmit';
import Tooltip from '../tooltip/Tooltip';
import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import ChatDrawer from '../drawer/ChatDrawer';





import VerifyBlockButton from "../table/VerifyBlockButton";
import { SidebarContext } from '../../context/SidebarContext';
import ChatServices from '../../services/ChatServices';

const CustomerTable = ({ customers }) => {

  

  const [messages, updateMessages] = useState([]);
  const [customerId, setCustomerId] = useState('');
  const [customerIdForDrawer, setCustomerIdForDrawer] = useState('');
  const { toggleModal } = useContext(SidebarContext);
  const { toggleDrawer } = useContext(SidebarContext);

  const handleRequest = (id) => {
    requestPhoneNumber(id);
  };
  


  const handleDrawerOpen = async  (id) => {
    await ChatServices.getChatById(id)
    .then((res) => {

      updateMessages( [...res]);
    })
    .catch((err) => {
      
     
    });
    setCustomerIdForDrawer(id);
    
    

    
    toggleDrawer();
  };
  const handleModalOpen = (id) => {
    setCustomerId(id);
    toggleModal();
  };

  return (
    <>
      <MainModal id={customerId} />
      <MainDrawer>
        <ChatDrawer id= {customerIdForDrawer}  messages= {messages}/>
      </MainDrawer>
      <TableBody>
        {customers?.map((user) => (
          <TableRow key={user._id}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {" "}
                {user._id.substring(20, 24)}
              </span>
            </TableCell>
            <TableCell>
              <div>
                <img
                  className="object-cover w-1/3 h-1/4 "
                  src={user.ID}
                  alt={user.ID}
                />
              </div>
            </TableCell>
            <TableCell>
              <div>
                <img
                  className="object-cover w-1/3 h-1/4 "
                  src={user.image}
                  alt={user.first_name}
                />
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {dayjs(user.createdAt).format("MMM D, YYYY")}
              </span>
            </TableCell>
            <TableCell>
              {user?.first_name ? (
                <span className="text-sm">{user?.first_name}</span>
              ) : (
                <span className="text-sm">N/A</span>
              )}
            </TableCell>
            <TableCell>
              <span className="text-sm">{user?.last_name}</span>
            </TableCell>
            <TableCell>
              {user.phone ? (
                <span className="text-sm">{user?.phone}</span>
              ) : (
                <Button
                  onClick={()=>handleRequest(user._id)}
                  className="h-12 bg-white w-full     dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 "
                  layout="outline"
                >
                  Send Request
                </Button>
              )}
            </TableCell>
            <TableCell>
              <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
                {" "}
                <a href={`https://t.me/${user.username}`}>
                  <Tooltip
                    title="Connect with User"
                    Icon={BsTelegram}
                    bgColor="#34D399"
                  />
                </a>
              </div>
            </TableCell>
            <TableCell>
              <Button onClick={()=>handleDrawerOpen(user._id)} 
              className="w-full rounded-md h-12">
                Chat
              </Button>
            </TableCell>

            <TableCell>
              <span className="text-sm font-medium">{user.isChecked}</span>
            </TableCell>
            <TableCell>
              <VerifyBlockButton id={user._id} status={user.status} />
            </TableCell>

            <TableCell>
              <div className="flex justify-end text-right">
                <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
                  {" "}
                  <Link to={`/customer-order/${user._id}`}>
                    <Tooltip
                      id="view"
                      Icon={FiEye}
                      title="View Order"
                      bgColor="#34D399"
                    />
                  </Link>
                </div>
                <div
                  onClick={() => handleModalOpen(user._id)}
                  className="p-2 cursor-pointer text-gray-400 hover:text-red-600"
                >
                  <Tooltip
                    id="delete"
                    Icon={FiTrash2}
                    title="Delete"
                    bgColor="#F87171"
                  />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CustomerTable;
