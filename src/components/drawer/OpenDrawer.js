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
        <Title title="Update Opening Hours" />
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Opening Time On Mondays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Opening Time On Mondays"
                  name="monday_open_time"
                  type="time"
                  placeholder="Opening Time On Mondays"
                />
                <Error errorName={errors.monday_open_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Closing Time on Mondays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Closing Time on Mondays"
                  name="monday_close_time"
                  type="time"
                  placeholder="Closing Time on Mondays"
                />
                <Error errorName={errors.monday_close_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Opening Time On Tuesdays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Opening Time On Tuesdays"
                  name="tuesday_open_time"
                  type="time"
                  placeholder="Opening Time On Tuesdays"
                />
                <Error errorName={errors.tuesday_open_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Closing Time on Tuesdays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Closing Time on Tuesdays"
                  name="tuesday_close_time"
                  type="time"
                  placeholder="Closing Time on Tuesdays"
                />
                <Error errorName={errors.tuesday_close_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Opening Time On Wednesdays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Opening Time On Wednesdays"
                  name="wednesday_open_time"
                  type="time"
                  placeholder="Opening Time On Wednesdays"
                />
                <Error errorName={errors.wednesday_open_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Closing Time on Wednesdays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Closing Time on Wednesdays"
                  name="wednesday_close_time"
                  type="time"
                  placeholder="Closing Time on Wednesdays"
                />
                <Error errorName={errors.wednesday_close_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Opening Time On Thursdays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Opening Time On Thursdays"
                  name="thursday_open_time"
                  type="time"
                  placeholder="Opening Time On Thursdays"
                />
                <Error errorName={errors.thursday_open_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Closing Time on Thursdays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Closing Time on Thursdays"
                  name="thursday_close_time"
                  type="time"
                  placeholder="Closing Time on Thursdays"
                />
                <Error errorName={errors.thursday_close_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Opening Time On Fridays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Opening Time On Fridays"
                  name="friday_open_time"
                  type="time"
                  placeholder="Opening Time On Fridays"
                />
                <Error errorName={errors.friday_open_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Closing Time on Fridays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Closing Time on Fridays"
                  name="friday_close_time"
                  type="time"
                  placeholder="Closing Time on Fridays"
                />
                <Error errorName={errors.friday_close_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Opening Time On Saturdays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Opening Time On Saturdays"
                  name="saturday_open_time"
                  type="time"
                  placeholder="Opening Time On Saturdays"
                />
                <Error errorName={errors.saturday_open_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Closing Time on Saturdays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Closing Time on Saturdays"
                  name="saturday_close_time"
                  type="time"
                  placeholder="Closing Time on Saturdays"
                />
                <Error errorName={errors.saturday_close_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Opening Time On Sundays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Opening Time On Sundays"
                  name="sunday_open_time"
                  type="time"
                  placeholder="Opening Time On Sundays"
                />
                <Error errorName={errors.sunday_open_time} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Closing Time on Sundays" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Closing Time on Sundays"
                  name="sunday_close_time"
                  type="time"
                  placeholder="Closing Time on Sundays"
                />
                <Error errorName={errors.sunday_close_time} />
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
