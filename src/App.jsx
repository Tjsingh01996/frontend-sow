import React, { createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import ProductList from "./Pages/ProductList";
import Context from "./Contex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./Pages/NoPage";
const AppContext  = createContext({
  alert:{
    severity:"",
    message:""
  }
});

function App() {
  return (
    <Context>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
      </Router>
      </ThemeProvider>
    </Context>
  );
}

export default App;
