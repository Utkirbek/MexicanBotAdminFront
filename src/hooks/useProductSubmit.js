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
      options: data.options,
      category: data.category,
     
      title: data.title,


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
      
      setValue("category");
      setValue('title');
      setValue('price');

     
      
      setImageUrl('');


      clearErrors('price');
     
     
      
  
      clearErrors("category");
      clearErrors('title');
  
      return;
    }

    if (id) {
      ProductServices.getProductById(id)
        .then((res) => {
          if (res) {
             setValue("category", res.category);
            setValue("price", res.price);
            setValue("options", res.options);
            setValue('title', res.title);
            
            
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
