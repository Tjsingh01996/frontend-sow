import { actionTypes } from "../helper";
import { Api } from "./product";

export const getTranslation = (dispatch, state) => async ({ page = "productListing", lang= "en"})  =>{
     try {
       const { data } = await Api.get(`/translations/${lang}/${page}`);
        typeof dispatch == "function" &&
          dispatch({
            type: actionTypes.PRODUCT_LISTING,
            message: data,
          });
       return { success: true, result: data };
     } catch (error) {
        
       return {
         success: false,
         message: error.message || "internal server error",
       };
     }
}