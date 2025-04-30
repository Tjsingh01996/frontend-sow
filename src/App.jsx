import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import ProductList from "./Pages/ProductList";

function App() {
  console.log(process.env.REACT_APP_SERVER_API)
  return (
    <ThemeProvider theme={theme}>
            <ProductList />
    </ThemeProvider>
  );
}

export default App;
