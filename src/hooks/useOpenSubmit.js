import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "../context/SidebarContext";
import OpenServices from "../services/OpenServices";
import { notifyError, notifySuccess } from "../utils/toast";

const useOpenSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm();

  const onSubmit = ({ open_time, close_time }) => {
    const categoryData = {
      open_time: open_time,

      close_time: close_time,
    };

    
      OpenServices.updateOpen( categoryData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue("close_time");
      setValue("open_time");

      return;
    }
    
      OpenServices.getCategoryById(id)
        .then((res) => {
          if (res) {
            setValue("open_time", res.open_time);
            setValue("close_time", res.close_time);
          }
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useOpenSubmit;
