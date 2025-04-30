import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Navbar({ toggleSidebar }) {
  return (
    <AppBar position="static" color="primary" sx={{ padding: "5px 0" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
          <Typography variant="h6" noWrap>
            {/* Maybe a Menu Icon */}≡
          </Typography>
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            English
          </Typography>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
            alt="flag"
            style={{ width: 24 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
