import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const LanguageSelector = () => {
  const [language, setLanguage] = React.useState(sessionStorage.getItem('lang') || 'en');
  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setLanguage(selectedLang);
    // Set in session storage
    sessionStorage.setItem('lang', selectedLang);
    // Optionally reload or trigger i18n change
    window.location.reload(); // if you want to reload the page
  };

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel id="language-label">Language</InputLabel>
      <Select
        labelId="language-label"
        id="language-select"
        value={language}
        onChange={handleChange}
        label="Language"
      >
        <MenuItem value="en">🇬🇧 English</MenuItem>
        <MenuItem value="sv">🇸🇪 Swedish</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
