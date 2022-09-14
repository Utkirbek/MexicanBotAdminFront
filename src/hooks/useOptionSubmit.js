import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "../context/SidebarContext";
import OptionServices from "../services/OptionServices";
import { notifyError, notifySuccess } from "../utils/toast";

const useOptionSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm();

  const onSubmit = ({ label, value }) => {
    const categoryData = {
      label: label,

      value: value,
    };

    if (id) {
      OptionServices.updateOption(id, categoryData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      OptionServices.addOption(categoryData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue("label");
      setValue("value");

      return;
    }
    if (id) {
      OptionServices.getOptionById(id)
        .then((res) => {
          if (res) {
            setValue("label", res.label);
            setValue("value", res.value);
          }
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useOptionSubmit;
