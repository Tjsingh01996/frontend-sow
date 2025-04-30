import React, { createContext } from "react";
import { actionTypes } from "./helper";
const initialState = {
    alert: null
}
export const AppContext  = createContext(initialState);


const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ALERT_SUCCESS:
            return { alert:{type: "success", message:action.message}  };
        case actionTypes.ALERT_ERROR:
            return { alert:{type: "error", message:action.message }  };
        case actionTypes.ALERT_NULL:
            return { alert: null };
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
