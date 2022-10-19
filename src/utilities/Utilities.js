import { toast } from "react-toastify";
import moment from 'moment';


export const notify = (message, error) => {
  const toastProps = {
    autoClose: 2000,
    newestOnTop: true,
    closeOnClick: true,
  }

  if(!error){
    toast.success(message, toastProps);
  }
  else{
    toast.error(message, toastProps)
  }
};

export const date = (value) => moment(value).format('LL');