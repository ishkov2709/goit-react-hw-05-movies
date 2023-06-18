import { toast } from 'react-toastify';

export const errorNotity = () => {
  return toast.error('📽️ Your request has no result. Please try again!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};
