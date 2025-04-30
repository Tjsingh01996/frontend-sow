import axios from "axios";
import { actionTypes } from "../helper";

export const Api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API,
    timeout: 2000,
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
  });


export const UpdateProduct = (dispatch) => async (productId , payload = {})  =>{
     try {
       const {data} = await Api.put(`/products/${productId}`, { ...payload });
        typeof dispatch == "function" &&
          dispatch({
            type: actionTypes.ALERT_SUCCESS,
            message: "Update successful!",
          });
       return { success: true, result: data };
       
     } catch (error) {
       return {
         success: false,
         message: error.message || "internal server error",
       };
     }
}

const getProductsList = (dispatch) => async (page) => {

  try {
    const productPerPage = 10;
    const { data } = await Api.get("/products", {
      params: {
        limit: productPerPage,
        page: page,
      },
    });
    return { success: true, result: data };
  } catch (error) {
    
   typeof dispatch == "function" &&
     dispatch({
       type: actionTypes.ALERT_ERROR,
       message: (error.message || "internal server error"),
     });
    return {
      success: false,
      message: error.message || "internal server error",
    };
  }
};

export { getProductsList };
