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

const menuItems = [
  { text: "Invoices", icon: <DescriptionIcon /> },
  { text: "Customers", icon: <PeopleIcon /> },
  { text: "My Business", icon: <BusinessIcon /> },
  { text: "Invoice Journal", icon: <JournalIcon /> },
  { text: "Price List", icon: <LabelIcon /> },
  { text: "Multiple Invoicing", icon: <ListAltIcon /> },
  { text: "Unpaid Invoices", icon: <CancelIcon /> },
  { text: "Offer", icon: <LocalOfferIcon /> },
  { text: "Inventory Control", icon: <InventoryIcon /> },
  { text: "Member Invoicing", icon: <GroupIcon /> },
  { text: "Import/Export", icon: <CloudUploadIcon /> },
  { text: "Log out", icon: <LogoutIcon /> },
];

const Sidebar = ({ open }) => {
  return (
    <Box
      sx={{
        width: open ? 240 : 0,
        overflowX: "hidden",
        transition: "width 0.3s",
        bgcolor: "background.paper",
        height: "100vh",
        borderRight: open ? "1px solid #ccc" : "none",
      }}
    >
      {open && (
        <>
          <Box p={2}>
            <Typography display={"flex"} justifyContent={"center"} variant="h6" sx={{ fontWeight: "bold" }}>Menu</Typography>
          </Box>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
};

export default Sidebar;
