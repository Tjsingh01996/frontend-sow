import React, { createContext } from "react";
import { actionTypes } from "./helper";
const initialState = {
    alert: null,
    translation :{
        
    }
}
export const AppContext  = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ALERT_SUCCESS:
            return {...state, alert:{type: "success", message:action.message}  };
        case actionTypes.ALERT_ERROR:
            return {...state, alert:{type: "error", message:action.message }  };
        case actionTypes.ALERT_NULL:
            return {...state, alert: null};
        case actionTypes.PRODUCT_LISTING:
            if((state.translation && state.translation.productListing)){
                delete state.translation.productListing
            };
            state.translation[actionTypes.PRODUCT_LISTING] = action.message
            return {...state};   
        case actionTypes.TERMS:
            if((state.translation && state.translation[actionTypes.TERMS])){
               delete state.translation[actionTypes.TERMS]
            };
            state.translation[actionTypes.TERMS] = action.message
            return {...state};  
        default:
            return state;
    }
};

function Context({ children }) {
    const [state, dispatch] = React.useReducer(reducer,
       initialState);


  return (
    <AppContext.Provider value={{
            state,
            dispatch
        }} >
        {children}
    </AppContext.Provider>
  );
}

export default Context;
