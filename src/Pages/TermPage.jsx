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
} from "@mui/material";
import { getTranslation } from "../actions/translations";
import { AppContext } from "../Contex";
import { actionTypes } from "../helper";
import { getTranslationText } from "./utils/translations";

const GoBackButton = styled(Button)(({ theme }) => ({
  fontSize: '1.125em',
  marginTop: '1.5em',
  borderRadius: '3rem',
  color: 'white',
  fontWeight: 500,
  padding: '1rem 2.5rem',
  backgroundColor: 'rgb(8, 158, 30)',
  cursor: 'pointer',
  width: '35vw',
  minWidth: 'max-content',
  maxWidth: '270px',
  '&:hover': {
    backgroundColor: 'rgb(6, 130, 24)', // Optional hover effect
  },
}));
      

const TermsPage = () => {
    const { dispatch, state } = React.useContext(AppContext); 
    const [language, setLanguage] = React.useState(sessionStorage.getItem('lang') || 'en');
    
    const getText = getTranslationText(state, actionTypes.TERMS); 

    React.useEffect(()=>{
        getTranslation(dispatch, state)({page:actionTypes.TERMS, lang: language})
    },[dispatch, language, state]) 

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://storage.123fakturera.se/public/wallpapers/sverige43.jpg')",
        backgroundSize: "cover",
        objectFit:"cover",
        backgroundAttachment:"fixed",
        textAlign:"center",
        // backgroundPosition: "center",
      }}
    >
      {/* AppBar Header */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none", pt: 2, width: "75%", color:"white", margin:"auto"  }}
      >
        <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
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
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
              alt="English"
              style={{ width: 24, height: 16 }}
            />
          </Box>
        </Toolbar>
      </AppBar>
        <Typography variant="h4" align="center" color="white" fontWeight={600} mb={3}>
           {getText("page_title")}
        </Typography>

        <Box display="flex" justifyContent="center" mb={4}>
          <GoBackButton size="large" variant="contained" color="success">
           
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
        }}
      >

       <Typography paragraph><b>{getText("by")}</b> {getText("term_1")}</Typography>
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
      <Typography paragraph>{getText("term_21")}{' '}
        <Link href="JavaScript:Utils.popupWindow('/us')" underline="hover">{getText("here")}</Link>.
        {getText("term_22")}
      </Typography>
      <Typography paragraph>{getText("term_23")}</Typography>
      <Typography paragraph>{getText("term_24")}</Typography>
      <Typography paragraph>{getText("term_25")}</Typography>
      <Typography paragraph>{getText("term_26")}</Typography>
    </Container>
    <Typography sx={{ marginBottom: "3em", textAlign:"center", color:"rgb(255, 255, 255)" }} >
        <GoBackButton size="large"  variant="contained" color="success">
              {getText("button_close_back")} 
        </GoBackButton>
    </Typography>
    </Box>
  );
};

export default TermsPage;
