import React from "react";
import { Alert, Box, Fade, Snackbar, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { AppContext } from "../../Contex";
import { actionTypes } from "../../helper";

function SuccessAlert() {
  const {
    state: { alert },
    dispatch,
  } = React.useContext(AppContext);
  return (
      <div>{alert && <Snackbar
        anchorOrigin={{ vertical:"top", horizontal:"center" }}
        open={!!alert}
        onClose={()=>{dispatch({ type: actionTypes.ALERT_NULL });}}
        autoHideDuration={4000}
      ><Alert severity={alert.type}>{alert.message}</Alert></Snackbar>}</div>
  );
}

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // 1280px and above

  React.useEffect(() => {
    setSidebarOpen(isDesktop);
  }, [isDesktop]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    // <ThemeProvider theme={theme}>
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Top Navbar */}
      <Navbar toggleSidebar={toggleSidebar} showToggle={!isDesktop} />
      <SuccessAlert />
      {/* Uncomment the Navbar component if you want to use it */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Sidebar
          open={sidebarOpen}
          permanent={isDesktop}
          onClose={closeSidebar}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: "100%",
            marginLeft: isDesktop ? "240px" : 0,
            transition: theme.transitions.create(["margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            position: "relative",
            zIndex: 1,
          }}
        >
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
