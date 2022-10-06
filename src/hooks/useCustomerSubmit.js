


import UserServices from "../services/UserServices";
import { notifyError, notifySuccess } from "../utils/toast";

 



 
 

  const requestPhoneNumber = (id) => {
      UserServices.requestPhoneNumber(id)
        .then((res) => {
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
  };


  


export default requestPhoneNumber;
