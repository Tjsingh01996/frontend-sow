import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Drawer,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import JournalIcon from "@mui/icons-material/ImportContacts";
import LabelIcon from "@mui/icons-material/Label";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LogoutIcon from "@mui/icons-material/Logout";
import { getTranslationText } from "../../Pages/utils/translations";
import { actionTypes } from "../../helper";
import { AppContext } from "../../Contex";

const menuItems = [
  { text: "invoices", icon: <DescriptionIcon /> },
  { text: "customers", icon: <PeopleIcon /> },
  { text: "myBusiness", icon: <BusinessIcon /> },
  { text: "invoiceJournal", icon: <JournalIcon /> },
  { text: "priceList", icon: <LabelIcon /> },
  { text: "multipleInvoicing", icon: <ListAltIcon /> },
  { text: "unpaidInvoices", icon: <CancelIcon /> },
  { text: "offer", icon: <LocalOfferIcon /> },
  { text: "inventoryControl", icon: <InventoryIcon /> },
  { text: "memberInvoicing", icon: <GroupIcon /> },
  { text: "importExport", icon: <CloudUploadIcon /> },
  { text: "logout", icon: <LogoutIcon /> },
];

const Sidebar = ({ open, permanent = false, onClose }) => {
  const { state } = React.useContext(AppContext);
  const pageForSideBar =
    Object.keys(state.translation).length > 0
      ? Object.keys(state.translation)[0]
      : actionTypes.PRODUCT_LISTING;
  const getText = getTranslationText(state, pageForSideBar);

  const sidebarContent = (
    <>
      <Box p={2}>
        <Typography
          display={"flex"}
          justifyContent={"center"}
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          {getText("menu")}
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={getText(item.text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  // For mobile: Use drawer component that overlays content
  if (!permanent) {
    return open ? (
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={onClose}
        sx={{
          display: "block",
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        ModalProps={{
          keepMounted: false, // Don't keep it mounted when closed
        }}
      >
        {sidebarContent}
      </Drawer>
    ) : null; // Don't render anything when closed
  }

  // For desktop: Use fixed sidebar that doesn't collapse content
  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        position: "fixed",
        height: "calc(100vh - 64px)", // Account for AppBar height
        top: 64, // Position below AppBar
        left: 0,
        overflowY: "auto",
        bgcolor: "background.paper",
        borderRight: "1px solid #ccc",
        zIndex: 1,
      }}
    >
      {sidebarContent}
    </Box>
  );
};

export default Sidebar;
