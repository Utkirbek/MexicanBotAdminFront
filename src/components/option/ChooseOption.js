import React from "react";

import useAsync from "../../hooks/useAsync";
import OptionServices from "../../services/OptionServices";

const ChooseOption = () => {
  const { data } = useAsync(OptionServices.getAllOption); //   console.log(value);
  return (
    <>
      {data.map((option) => (
        <option key={option._id} value={option._id}>
          {option.label}
        </option>
      ))}
    </>
  );
};

export default ChooseOption;
