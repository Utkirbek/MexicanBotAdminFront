import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";


import Error from "../form/Error";
import Title from "../form/Title";
import InputArea from "../form/InputArea";
import LabelArea from "../form/LabelArea";

import DrawerButton from "../form/DrawerButton";

import useOpenSubmit from "../../hooks/useOpenSubmit";

const OpenDrawer = ({ id }) => {
  const { register, handleSubmit, onSubmit, errors, } =
    useOpenSubmit(id);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <Title
          title="Update Opening Hours"
          
        />
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Opening Time" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Opening Time"
                  name="open_time"
                  type="time"
                  placeholder="Opening Time"
                />
                <Error errorName={errors.open_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Closing Time" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Closing Time"
                  name="close_time"
                  type="time"
                  placeholder="Closing Time"
                />
                <Error errorName={errors.close_time} />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Open" />
        </form>
      </Scrollbars>
    </>
  );
};

export default OpenDrawer;
