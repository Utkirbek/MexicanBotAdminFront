import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "../context/SidebarContext";
import ChatServices from "../services/ChatServices";
import { notifyError, notifySuccess } from "../utils/toast";

const useChatSubmit = (id) => {
  
  const {closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,

  } = useForm();

  const onSubmit = ({ message }) => {
    
    const categoryData = {
        message: message,
        sender : "admin",
    };


    ChatServices.sendMessage(id,categoryData)
        .then((res) => {
          setIsUpdate(true)
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));

        closeDrawer();
  };
  




    
   
  
  return {
    register,
    handleSubmit,
    onSubmit,
    
  };
};

export default useChatSubmit;
