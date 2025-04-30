import axios from "axios";

export const Api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API,
    timeout: 1000,
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
  });


export const UpdateProduct = async (productId , payload = {}) =>{
     try {
        console.log(payload)
       const {data} = await Api.put(`/products/${productId}`, { ...payload });
       return { success: true };
     } catch (error) {
       return {
         success: false,
         message: error.message || "internal server error",
       };
     }
}

const getProductsList = async (page) => {
  try {
    const productPerPage = 10;
    const {data} = await Api.get("/products", {
        params:{
            limit: productPerPage,
            page: page
        }
    });
    return { success: true, result: data };
  } catch (error) {
    return {
      success: false,
      message: error.message || "internal server error",
    };
  }
};

export { getProductsList };
