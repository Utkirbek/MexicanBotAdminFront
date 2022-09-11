
import React from 'react';
import { useParams } from 'react-router';

import useAsync from '../hooks/useAsync';
import MainDrawer from '../components/drawer/MainDrawer';
import useToggleDrawer from '../hooks/useToggleDrawer';
import Loading from '../components/preloader/Loading';
import PageTitle from '../components/Typography/PageTitle';
import ProductServices from '../services/ProductServices';
import ProductDrawer from '../components/drawer/ProductDrawer';

const ProductDetails = () => {
  const { id } = useParams();
  const { handleUpdate } = useToggleDrawer();
  const { data, loading } = useAsync(() => ProductServices.getProductById(id));

  return (
    <>
      <MainDrawer>
        <ProductDrawer id={id} />
      </MainDrawer>

      <PageTitle>Product Details</PageTitle>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="inline-block overflow-y-auto h-full align-middle transition-all transform">
          <div className="flex flex-col lg:flex-row md:flex-row w-full overflow-hidden">
            <div className="flex-shrink-0 flex items-center justify-center h-auto">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="w-full flex flex-col p-5 md:p-8 text-left">
              <div className="mb-5 block ">
                <div className="font-serif font-semibold py-1 text-sm"></div>
                <h2 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif dark:text-gray-400">
                  {data.title}
                </h2>
                <p className="uppercase font-serif font-medium text-gray-500 dark:text-gray-400 text-sm">
                  SKU :{" "}
                  <span className="font-bold text-gray-500 dark:text-gray-500">
                    {data._id !== undefined && data._id.substring(18, 24)}
                  </span>
                </p>
              </div>

              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400 md:leading-7">
                {data.description}
              </p>
              <div className="flex flex-col mt-4">
                <p className="font-serif font-semibold py-1 text-gray-500 text-sm">
                  {data.type}
                </p>
                <div className="flex flex-row">
                  {JSON.parse(data?.options).map((t, i) => (
                    <span
                      key={i + 1}
                      className="bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row">
                  {JSON.parse(data?.prices).map((t, i) => (
                    <span
                      key={i + 1}
                      className="bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => handleUpdate(id)}
                  className="cursor-pointer leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300"
                >
                  Edit Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
