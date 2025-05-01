import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSelector from "../LanguageSelectBox";

export default function Navbar({ toggleSidebar, showToggle = true }) {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ padding: "5px 0", zIndex: 10 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {showToggle && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleSidebar}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        )}
        {!showToggle && <Box sx={{ width: 48 }} />}{" "}
        {/* Spacer when menu is hidden */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
