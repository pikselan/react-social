import axios from "axios";
import { toast } from "react-toastify";

function errorResponseHandler(err: any) {
  if (err) {
    let message;
    if (err.response) {
      if (err.response.statu === 500) message = "Something went wrong";
      else message = err.response.message;

      console.log(message);
      toast(message);
      return Promise.reject(err);
    }
  }
}

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1`,
});

instance.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export default instance;
