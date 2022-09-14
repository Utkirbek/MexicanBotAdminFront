import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import ProductServices from '../services/ProductServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useProductSubmit = (id) => {
  const [imageUrl, setImageUrl] = useState('');
 

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
      price: data.price,
      category: data.category,
      sku: data.sku,
      title: data.title,
      slug: data.slug
        ? data.slug
        : data.title.toLowerCase().replace("&", "").split(" ").join("-"),
      description: data.description,

      type: data.type,

      image: imageUrl,
      
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
      setValue("category");
      setValue('title');
      setValue('slug');
      setValue('description');
      
      setValue('type');
     
      
      setImageUrl('');
     
     
      
      clearErrors('sku');
      clearErrors("category");
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
             setValue("category", res.category);
            setValue('sku', res.sku);
            setValue('title', res.title);
            setValue('slug', res.slug);
            setValue('description', res.description);
            setValue('type', res.type);
            
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

  };
};

export default useProductSubmit;
