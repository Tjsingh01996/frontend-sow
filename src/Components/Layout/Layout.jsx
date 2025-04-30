import React from "react";
import {
  Alert,
    Box,
    Fade
} from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { AppContext } from "../../Contex";
import { actionTypes } from "../../helper";

function SuccessAlert({message, severity="success" }) {
  const { state:{ alert },  dispatch } = React.useContext(AppContext); 

  React.useEffect(() => {
    const timer = setTimeout(() => {
       dispatch({type: actionTypes.ALERT_NULL});
    }, 3000); // hides after 3 seconds

    return () => clearTimeout(timer); // cleanup
  }, [alert !== null]);

  return (
    <Fade
      in={!!(alert)}
      appear={true}
      timeout={{ enter: 1000, exit: 500 }}
      easing={{ enter: 'ease-in', exit: 'ease-out' }}
    >
      <div>{alert && <Alert severity={alert.type}>{alert.message}</Alert>}</div>
    </Fade>
  );
}


function Layout( { children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  

  return (
    // <ThemeProvider theme={theme}>
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Top Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />
      <SuccessAlert message={"Hello How Are you"} />
      {/* Uncomment the Navbar component if you want to use it */}
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar open={sidebarOpen} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
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
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<AddCircleOutlineIcon />}
                  sx={{ marginRight: 1 }}
                >
                  Add
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<PrintIcon />}
                  sx={{ marginRight: 1 }}
                >
                  Print
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<ToggleOnIcon />}
                >
                  Toggle
                </Button>
              </Grid>
            </Grid> */}
            {children}
          {/* Table */}
          {/* <Box sx={{ marginTop: 4 }}>
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
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <ArrowRightAltIcon color="primary" />
                        </TableCell>
                        <TableCell>
                          <TextField
                            value={row.articleNo}
                            size="small"
                            fullWidth
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            value={row.product}
                            size="small"
                            fullWidth
                          />
                        </TableCell>
                        <TableCell>
                          <TextField value={row.price} size="small" fullWidth />
                        </TableCell>
                        <TableCell>
                          <TextField value={row.stock} size="small" fullWidth />
                        </TableCell>
                        <TableCell>
                          <TextField value={row.unit} size="small" fullWidth />
                        </TableCell>
                        <TableCell>
                          <IconButton size="small">
                            <MoreVertIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box> */}
        </Box>
      </Box>
    </Box>
    // </ThemeProvider>
  );
}

export default Layout;
