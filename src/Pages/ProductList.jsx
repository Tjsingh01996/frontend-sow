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

  React.useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await getProductsList(page);  // Call the API with current page
      if (response.success) {
        setProducts(response.result);  // Update state with the fetched products
      } else {
        console.error("Error fetching products:", response.message);
      }
      setLoading(false);
    };
    
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
            placeholder="Search Article No ..."
            size="small"
            InputProps={{
              endAdornment: <SearchIcon color="primary" />,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            placeholder="Search Product ..."
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
            <span className="button-text">Add</span>
          </ResponsiveButton>
            <ResponsiveButton color="primary" variant="outlined" startIcon={<PrintIcon />}>
                <span className="button-text">Print</span>
            </ResponsiveButton>
          <ResponsiveButton
            variant="outlined"
            color="primary"
            startIcon={<ToggleOnIcon />}
          >
             <span className="button-text">Toggle</span>
          </ResponsiveButton>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 4 }}>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Article No.</TableCell>
                <TableCell>Product/Service</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>In Stock</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Options</TableCell>
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
          <Button disabled={page === 1} onClick={handlePrevPage}>Previous</Button>
          <Button onClick={handleNextPage}>Next</Button>
        </Box>
      </Box>
    </Layout>
  );
}


const ProductRow = ({row}) =>{

     const [formData, setFormData] = React.useState({ ...row });

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
         const result = await UpdateProduct(formData.id, formData)
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
                        Save
                    </Button>
                  </TableCell>
                </TableRow>
        
        </>
    )
}



export default ProductList;
