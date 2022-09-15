import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {  Select } from "@windmill/react-ui";


import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import ParentCategory from "../category/ParentCategory";
import ChooseOption from '../option/ChooseOption';
import DrawerButton from '../form/DrawerButton';
import Uploader from '../image-uploader/Uploader';

import useProductSubmit from '../../hooks/useProductSubmit';

const ProductDrawer = ({ id }) => {
  const {
    register,
    
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    

  } = useProductSubmit(id);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title="Update Product"
            description="Updated your product and necessary information from here"
          />
        ) : (
          <Title
            title="Add Product"
            description="Add your product and necessary information from here"
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="block">
          <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Product Image" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader imageUrl={imageUrl} onChange={setImageUrl} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Product Title/Name" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Product Title/Name"
                  name="title"
                  type="text"
                  placeholder="Product title"
                />
                <Error errorName={errors.title} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Parent Category" />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name="parent"
                  {...register("category", {
                    required: "Product parent category is required!",
                  })}
                >
                  <option value="" defaultValue hidden>
                    Select parent category
                  </option>
                  <ParentCategory />
                </Select>
                <Error errorName={errors.parent} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Extra option" />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  name="options"
                  multiple
                  {...register("options", {
                    required: "Product Extra option is required!",
                  })}
                >
                  <option value="" defaultValue hidden>
                    Select extra optiosn
                  </option>
                  <ChooseOption />
                </Select>
                <Error errorName={errors.options} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Price" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Price "
                  name="price"
                  type="number"
                  placeholder="Price "
                />
                <Error errorName={errors.title} />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Product" />
        </form>
      </Scrollbars>
    </>
  );
};

export default React.memo(ProductDrawer);
