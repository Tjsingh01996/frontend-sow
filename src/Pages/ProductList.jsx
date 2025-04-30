import React from "react";
import {
    IconButton,
    TextField,
    Box,
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    styled
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PrintIcon from "@mui/icons-material/Print";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Layout from "../Components/Layout/Layout";
import { Api, getProductsList, UpdateProduct } from "../actions/product";
import axios from "axios";
import { AppContext } from "../Contex";
import { getTranslation } from "../actions/translations";
import { actionTypes } from "../helper";
import { getTranslationText } from "./utils/translations";


const ResponsiveButton = styled(Button)(({ theme }) => ({
  borderRadius: 20,
  padding: '8px 16px',
  [theme.breakpoints.down('sm')]: {
    padding: '8px', // smaller padding for mobile
    justifyContent: 'center', // Center the icon on mobile
  },
  '.button-text': {
    [theme.breakpoints.down('md')]: {
      display: 'none', // Hide text on mobile
      
    },
    [theme.breakpoints.up('md')]: {
      display: 'inline', // Show text from tablet and above
    },
  },
}));

function ProductList() {
  const [products, setProducts] = React.useState({rows:[]});
  const [page, setPage] = React.useState(1);  // For pagination
  const [loading, setLoading] = React.useState(false);
  const { dispatch, state } = React.useContext(AppContext); 
  const getText = getTranslationText(state, actionTypes.PRODUCT_LISTING)
  const [language, setLanguage] = React.useState(sessionStorage.getItem('lang') || 'en');
  

  React.useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await getProductsList(dispatch)(page);  // Call the API with current page
      if (response.success) {
        setProducts(response.result);  // Update state with the fetched products
      } else {
        console.error("Error fetching products:", response.message);
      }
      setLoading(false);
    };
    getTranslation(dispatch, state)({page:actionTypes.PRODUCT_LISTING, lang: language})
    
    fetchProducts();
  }, [page]);  // Fetch products whenever the page changes
  
  const handleNextPage = () => setPage(prevPage => prevPage + 1);
  const handlePrevPage = () => setPage(prevPage => Math.max(prevPage - 1, 1));

    

//   const handleChange = (index, field, value) => {
//     const updated = [...editedRows];
//     updated[index][field] = value;
//     setEditedRows(updated);
//   };

  return (
    <Layout>
      <Grid container spacing={2} alignItems="center">
        <Grid item  xs={12} sm={4}>
          <TextField
            fullWidth
            placeholder={getText("searchArticleNo")}
            size="small"
            InputProps={{
              endAdornment: <SearchIcon color="primary" />,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            placeholder={getText("searchArticleNo")}
            size="small"
            InputProps={{
              endAdornment: <SearchIcon color="primary" />,
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ textAlign: { xs: "left", sm: "right" } }}
        >
          <ResponsiveButton
            variant="outlined"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            sx={{ marginRight: 1 }}
          >
            <span className="button-text">{getText("add")}</span>
          </ResponsiveButton>
            <ResponsiveButton color="primary" variant="outlined" startIcon={<PrintIcon />}>
                <span className="button-text">{getText("print")}</span>
            </ResponsiveButton>
          <ResponsiveButton
            variant="outlined"
            color="primary"
            startIcon={<ToggleOnIcon />}
          >
             <span className="button-text">{getText("toggle")}</span>
          </ResponsiveButton>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 4 }}>
        <TableContainer component={Paper} elevation={0}   sx={{ 
          maxHeight: 400, // or adjust height as needed
          overflowY: 'auto' 
        }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>{getText("articleNo")}</TableCell>
                <TableCell>{getText("productService")}</TableCell>
                <TableCell>{getText("price")}</TableCell>
                <TableCell>{getText("inStock")}</TableCell>
                <TableCell>{getText("unit")}</TableCell>
                <TableCell>{getText("options")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.rows.length >0 && products.rows.map((row, index) => (
                <ProductRow key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
         <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button disabled={page === 1} onClick={handlePrevPage}>{getText("previous")}</Button>
          <Button onClick={handleNextPage}>{getText("next")}</Button>
        </Box>
      </Box>
    </Layout>
  );
}


const ProductRow = ({row}) =>{
    const [formData, setFormData] = React.useState({ ...row });
    const { dispatch, state } = React.useContext(AppContext); 
    const getText = getTranslationText(state, actionTypes.PRODUCT_LISTING)

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
         const result = await UpdateProduct(dispatch)(formData.id, formData)
      if(result.success == true){
        console.log("formData", formData)
      }else{
        console.log(result.message)
      }
    } catch (error) {
            console.log(error)
    }
     
  };

    return (
        <>
        <TableRow >
                  <TableCell>
                    <ArrowRightAltIcon color="primary" />
                  </TableCell>
                  <TableCell>
                    <TextField value={formData.article_no} onChange={(e) => handleChange("article_no", e.target.value)} size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField value={formData.description} onChange={(e) => handleChange("description", e.target.value)} size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField value={formData.price} size="small" onChange={(e) => handleChange("price", e.target.value)} fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField value={formData.in_stock} size="small"  onChange={(e) => handleChange("in_stock", e.target.value)} fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField value={formData.unit} onChange={(e) => handleChange("unit", e.target.value)} size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <IconButton size="small">
                      <MoreVertIcon />
                    </IconButton>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={handleSave}
                    >
                        {getText("save")}
                    </Button>
                  </TableCell>
                </TableRow>
        
        </>
    )
}



export default ProductList;
