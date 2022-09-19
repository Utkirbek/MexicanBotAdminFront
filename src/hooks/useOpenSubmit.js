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

  const onSubmit = ({
    monday_open_time,
    monday_close_time,

    tuesday_open_time,
    tuesday_close_time,

    wednesday_open_time,
    wednesday_close_time,

    thursday_open_time,
    thursday_close_time,

    friday_open_time,
    friday_close_time,

    saturday_open_time,
    saturday_close_time,

    sunday_open_time,
    sunday_close_time,
  }) => {
    const categoryData = {
      monday_open_time: monday_open_time,
      monday_close_time: monday_close_time,

      tuesday_open_time: tuesday_open_time,
      tuesday_close_time: tuesday_close_time,

      wednesday_open_time: wednesday_open_time,
      wednesday_close_time: wednesday_close_time,

      thursday_open_time: thursday_open_time,
      thursday_close_time: thursday_close_time,

      friday_open_time: friday_open_time,
      friday_close_time: friday_close_time,

      saturday_open_time: saturday_open_time,
      saturday_close_time: saturday_close_time,

      sunday_open_time: sunday_open_time,
      sunday_close_time: sunday_close_time,

      
      
    };

    OpenServices.updateOpen(categoryData)
      .then((res) => {
        setIsUpdate(true);
        notifySuccess(res.message);
      })
      .catch((err) => notifyError(err.message));
    closeDrawer();
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue("monday_close_time");
      setValue("monday_open_time");

      setValue("tuesday_close_time");
      setValue("tuesday_open_time");

      setValue("wednesday_close_time");
      setValue("wednesday_open_time");

      setValue("thursday_close_time");
      setValue("thursday_open_time");

      setValue("friday_close_time");
      setValue("friday_open_time");

      setValue("saturday_close_time");
      setValue("saturday_open_time");

      setValue("sunday_close_time");
      setValue("sunday_open_time");

      return;
    }
    
      OpenServices.getCategoryById(id)
        .then((res) => {
          if (res) {
            setValue("monday_open_time", res.monday_open_time);
            setValue("monday_close_time", res.monday_close_time);

            setValue("tuesday_open_time", res.tuesday_open_time);
            setValue("tuesday_close_time", res.tuesday_close_time);

            setValue("wednesday_open_time", res.wednesday_open_time);
            setValue("wednesday_close_time", res.wednesday_close_time);

            setValue("thursday_open_time", res.thursday_open_time);
            setValue("thursday_close_time", res.thursday_close_time);

            setValue("friday_open_time", res.friday_open_time);
            setValue("friday_close_time", res.friday_close_time);

            setValue("saturday_open_time", res.saturday_open_time);
            setValue("saturday_close_time", res.saturday_close_time);

            setValue("sunday_open_time", res.sunday_open_time);
            setValue("sunday_close_time", res.sunday_close_time);
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
