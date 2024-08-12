import * as React from 'react';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material';


function SearchBox() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    navigate(`/search/${search}`);
  }, [search, navigate]);

  return (
    <Box component="form" height={70} sx={{ display: 'flex', alignItems: 'center' }} px={2} py={1} onSubmit={handleSubmit}>
      <InputBase 
        onChange={handleChange}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        startAdornment={
          <SearchIcon 
            sx={{
              width: 40,
              height: 40,
              padding: '8px',
              borderRadius: '50%',
              backgroundColor: 'red',
              mr: 1,
              "&:hover": {
                opacity: 0.7
              }
            }} 
          />
        }
        sx={{ 
          width: '100%', 
          height: "100%", 
          padding: '0 8px', 
          borderRadius: "50px", 
          border: "3px solid #ccc",
        }}
      />
    </Box>
  );
}

export default SearchBox;
