import { actionTypes } from "../helper";
import { Api } from "./product";

export const getTranslation =
  (dispatch, state) =>
  async ({ page = actionTypes.PRODUCT_LISTING, lang = "en" }) => {
    try {
      const { data } = await Api.get(`/translations/${lang}/${page}`);
      typeof dispatch == "function" &&
        dispatch({
          type: page,
          message: data,
        });
      return { success: true, result: data };
    } catch (error) {
      return {
        success: false,
        message: error.message || "internal server error",
      };
    }
  };