import React from "react";
import {
    Box
} from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

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
