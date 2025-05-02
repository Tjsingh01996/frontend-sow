// src/pages/TermsPage.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
  Link,
  styled,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { getTranslation } from "../actions/translations";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Contex";
import { actionTypes } from "../helper";
import { getTranslationText } from "./utils/translations";
import LanguageSelector from "../Components/TermPageDropDown";

const GoBackButton = styled(Button)(({ theme }) => ({
  fontSize: "1.125em",
  marginTop: "1.5em",
  borderRadius: "3rem",
  color: "white",
  fontWeight: 500,
  padding: "1rem 2.5rem",
  backgroundColor: "rgb(8, 158, 30)",
  cursor: "pointer",
  width: "35vw",
  minWidth: "max-content",
  maxWidth: "270px",
  "&:hover": {
    backgroundColor: "rgb(6, 130, 24)", // Optional hover effect
  },
}));

const TermsPage = () => {
  const [language, setLanguage] = React.useState(
    sessionStorage.getItem("lang") || "en"
  );
  const { dispatch, state } = React.useContext(AppContext);
  const getText = getTranslationText(state, actionTypes.TERMS);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:1279px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    getTranslation(
      dispatch,
      state
    )({ page: actionTypes.TERMS, lang: language });
  }, [language]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://storage.123fakturera.se/public/wallpapers/sverige43.jpg')",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundAttachment: "fixed",
        textAlign: "center",
        // backgroundPosition: "center",
      }}
    >
      {/* AppBar Header */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          pt: 2,
          width: "75%",
          color: "white",
          margin: "auto",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ order: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleMenuClose}>
                  {getText("menu_home")}
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  {getText("menu_order")}
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  {getText("menu_customers")}
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  {getText("menu_about")}
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  {getText("menu_contact")}
                </MenuItem>
              </Menu>
              <Box sx={{ order: 2 }}>
                <LanguageSelector />
              </Box>
            </>
          ) : (
            <>
              <Box display="flex" alignItems="center" gap={1}>
                <img
                  src="https://storage.123fakturera.se/public/icons/diamond.png"
                  alt="Diamond"
                  style={{ height: 30 }}
                />
              </Box>

              <Box display="flex" gap={3} alignItems="center" flexWrap="wrap">
                <Link href="#" underline="none" color="white">
                  {getText("menu_home")}
                </Link>
                <Link href="#" underline="none" color="white">
                  {getText("menu_order")}
                </Link>
                <Link href="#" underline="none" color="white">
                  {getText("menu_customers")}
                </Link>
                <Link href="#" underline="none" color="white">
                  {getText("menu_about")}
                </Link>
                <Link href="#" underline="none" color="white">
                  {getText("menu_contact")}
                </Link>
                <Link href="#" underline="none" color="white">
                  {getText("menu_language")}
                </Link>
                <LanguageSelector />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Typography
        variant="h4"
        align="center"
        color="white"
        fontWeight={600}
        mb={3}
      >
        {getText("page_title")}
      </Typography>

      <Box display="flex" justifyContent="center" mb={4}>
        <GoBackButton
          onClick={() => {
            navigate("/");
          }}
          size="large"
          variant="contained"
          color="success"
        >
          {getText("button_close_back")}
        </GoBackButton>
      </Box>
      {/* Main Terms Box */}
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: 3,
          px: { xs: 2, md: 6 },
          py: 4,
          mt: 6,
          mx: { xs: 3, sm: 4, md: "auto" },
          width: { xs: "auto", md: "100%" },
        }}
      >
        <Typography paragraph>
          <b>{getText("by")}</b> {getText("term_1")}
        </Typography>
        <Typography paragraph>{getText("term_2")}</Typography>
        <Typography paragraph>{getText("term_3")}</Typography>
        <Typography paragraph>{getText("term_4")}</Typography>
        <Typography paragraph>{getText("term_5")}</Typography>
        <Typography paragraph>{getText("term_6")}</Typography>
        <Typography paragraph>{getText("term_7")}</Typography>
        <Typography paragraph>{getText("term_8")}</Typography>
        <Typography paragraph>{getText("term_9")}</Typography>
        <Typography paragraph>{getText("term_10")}</Typography>
        <Typography paragraph>{getText("term_11")}</Typography>
        <Typography paragraph>{getText("term_12")}</Typography>
        <Typography paragraph>{getText("term_13")}</Typography>
        <Typography paragraph>{getText("term_14")}</Typography>
        <Typography paragraph>{getText("term_15")}</Typography>
        <Typography paragraph>{getText("term_16")}</Typography>
        <Typography paragraph>{getText("term_17")}:</Typography>
        <Typography paragraph>{getText("term_18")}</Typography>
        <Typography paragraph>{getText("term_19")}</Typography>
        <Typography paragraph>{getText("term_20")}</Typography>
        <Typography paragraph>
          {getText("term_21")}{" "}
          <Link href="JavaScript:Utils.popupWindow('/us')" underline="hover">
            {getText("here")}
          </Link>
          .{getText("term_22")}
        </Typography>
        <Typography paragraph>{getText("term_23")}</Typography>
        <Typography paragraph>{getText("term_24")}</Typography>
        <Typography paragraph>{getText("term_25")}</Typography>
        <Typography paragraph>{getText("term_26")}</Typography>
      </Container>
      <Typography
        sx={{
          paddingBottom: "3em",
          textAlign: "center",
          color: "rgb(255, 255, 255)",
        }}
      >
        <GoBackButton
          onClick={() => {
            navigate("/");
          }}
          size="large"
          variant="contained"
          color="success"
        >
          {getText("button_close_back")}
        </GoBackButton>
      </Typography>
    </Box>
  );
};

export default TermsPage;
