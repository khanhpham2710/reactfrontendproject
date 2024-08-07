import * as React from 'react';
import { useState, useCallback } from 'react';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function SearchBoxOpen({ setShowSearch }) {
    const [search, setSearch] = useState('');
    const [fullWidth, setFullWidth] = useState(false);
    const navigate = useNavigate();

    const handleChange = useCallback((event) => {
        setSearch(event.target.value);
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault(); 
        console.log(search)
        if (search.trim()) { 
            navigate(`/search/${search}`);
        }
    }, [search]);

    const handleIconClick = () => {
        setFullWidth(prev => !prev);
        setShowSearch(prev => !prev);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
                onChange={handleChange}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                startAdornment={
                    <SearchIcon
                        onClick={handleIconClick}
                        sx={{
                            width: 40,
                            height: 40,
                            padding: '10px',
                            borderRadius: '50%',
                            backgroundColor: 'red',
                            mr: 1,
                            cursor: 'pointer',
                            "&:hover": {
                                opacity: 0.7,
                            },
                        }}
                    />
                }
                sx={{
                    width: fullWidth ? "300px" : "60px",
                    height: "100%",
                    padding: '0 8px',
                    borderRadius: "50px",
                    border: "3px solid #ccc",
                    transition: 'width 0.3s ease',
                }}
            />
        </form>
    );
}

export default SearchBoxOpen;
