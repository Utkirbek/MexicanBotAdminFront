import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import ProductServices from '../services/ProductServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useProductSubmit = (id) => {
  const [imageUrl, setImageUrl] = useState('');
 
  const [option, setOption] = useState([]);
  const [price, setPrice]= useState([]);
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!imageUrl) {
      notifyError('Image is required!');
      return;
    }
    if (data.originalPrice < data.salePrice) {
      notifyError('SalePrice must be less then or equal of product price!');
      return;
    }

    const productData = {
      sku: data.sku,
      title: data.title,
      slug: data.slug
        ? data.slug
        : data.title.toLowerCase().replace("&", "").split(" ").join("-"),
      description: data.description,

      type: data.type,

      image: imageUrl,
      prices: JSON.stringify(price),
      options: JSON.stringify(option),
    };

    if (id) {
      ProductServices.updateProduct(id, productData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      ProductServices.addProduct(productData)
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
      setValue('sku');
      setValue('title');
      setValue('slug');
      setValue('description');
      
      setValue('type');
     
      
      setImageUrl('');
     
      setPrice([]);
      setOption([]);
      
      clearErrors('sku');
      clearErrors('title');
      clearErrors('slug');
      clearErrors('description');
      clearErrors('type');
     
      return;
    }

    if (id) {
      ProductServices.getProductById(id)
        .then((res) => {
          if (res) {
            setValue('sku', res.sku);
            setValue('title', res.title);
            setValue('slug', res.slug);
            setValue('description', res.description);
            setValue('type', res.type);
            setPrice(JSON.parse(res.prices));
            setOption(JSON.parse(res.options));
            setImageUrl(res.image);
          }
        })
        .catch((err) => {
          notifyError('There is a server error!');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen]);

  

  return {
    register,
    watch,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    price,
    setPrice,
    option,
    setOption,
  };
};

export default useProductSubmit;
