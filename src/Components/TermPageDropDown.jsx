import React, { useState } from 'react';
import { Menu, MenuItem, Button, Box, Typography, Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { getTranslationText } from '../Pages/utils/translations';
import { actionTypes } from '../helper';
import { AppContext } from '../Contex';

const LanguageSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState(sessionStorage.getItem('lang') || 'en');
  const { dispatch, state } = React.useContext(AppContext); 
  const getText = getTranslationText(state, actionTypes.TERMS);   
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (selectedLang) => {
    setLanguage(selectedLang);
    sessionStorage.setItem('lang', selectedLang);
    window.location.reload();
  };

  const getLanguageLabel = (lang) => {
    return lang === 'sv' ? 'Svenska' : 'English';
  };

  const getFlagUrl = (lang) => {
    return lang === 'sv'
      ? 'https://storage.123fakturere.no/public/flags/SE.png'
      : 'https://storage.123fakturere.no/public/flags/GB.png';
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{ color: 'white', textTransform: 'none' }}
      >
        <Typography variant="body1" sx={{ marginRight: 1 }}>
          {getLanguageLabel(language)}
        </Typography>
        <Avatar
          alt={`${getLanguageLabel(language)} Flag`}
          src={getFlagUrl(language)}
          sx={{ width: 24, height: 16 }}
          variant="square"
        />
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            handleChange('sv');
          }}
        >
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            {getText("swedish")}
          </Typography>
          <Avatar
            alt="Sweden Flag"
            src="https://storage.123fakturere.no/public/flags/SE.png"
            sx={{ width: 24, height: 16 }}
            variant="square"
          />
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            handleChange('en');
          }}
        >
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            {getText("english")}
          </Typography>
          <Avatar
            alt="UK Flag"
            src="https://storage.123fakturere.no/public/flags/GB.png"
            sx={{ width: 24, height: 16 }}
            variant="square"
          />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
