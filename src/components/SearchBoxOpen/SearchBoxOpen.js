import * as React from 'react';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { InputBase, Box, MenuItem, Typography, Paper, MenuList } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchAnime, letterSearchAnime } from '../../global/searchSlice';

function SearchBoxOpen({ setShowSearch }) {
    const [search, setSearch] = useState('');
    const [fullWidth, setFullWidth] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { letterSearchResults } = useSelector(state => state.search);
    const [filterList, setFilterList] = useState([]);

    const handleChange = useCallback((event) => {
        setSearch(event.target.value);
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if (search.trim()) {
            dispatch(({ query: search }));
            navigate(`/search/${search}`);
        }
    }, [search, dispatch, navigate]);

    const handleIconClick = () => {
        setFullWidth(prev => !prev);
        setShowSearch(prev => !prev);
    };

    const firstLetter = useMemo(() => search.charAt(0), [search]);

    function isLetter(char){
        return /^[a-zA-Z]$/.test(char);
    }

    useEffect(() => {
        if (firstLetter && isLetter(firstLetter)) {
            dispatch(letterSearchAnime({ letter: firstLetter }));
        }
    }, [firstLetter, dispatch]);

    useEffect(() => {
        if (search) {
            setFilterList(letterSearchResults?.filter((item) => {
                return item.title.substring(0, search.length).toLowerCase() === search.toLowerCase();
            }));
        }
    }, [letterSearchResults, search]);


    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <form onSubmit={handleSubmit}>
                <InputBase
                    value={search}
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
                                my: 1,
                                mr: 1,
                                cursor: 'pointer',
                                "&:hover": {
                                    opacity: 0.7,
                                },
                            }}
                        />
                    }
                    sx={{
                        width: fullWidth ? "320px" : "60px",
                        height: "100%",
                        padding: '0 8px',
                        borderRadius: "50px",
                        border: "3px solid #ccc",
                        transition: 'width 0.3s ease',
                    }}
                />
            </form>
            {firstLetter && letterSearchResults.length > 0 && (
                <Paper
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: "8%",
                        width: '84%',
                        zIndex: 1,
                        display: fullWidth ? "block" : "none"
                    }}
                >
                    <MenuList>
                        {filterList?.slice(0, 5).map((item, index) => (
                            <MenuItem
                                key={index}
                                onClick={() => navigate(`/anime/${item.mal_id}`)}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: 'auto', 
                                    padding: '8px', 
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                            >
                                <img
                                    src={item.images?.jpg.large_image_url}
                                    alt={item.title}
                                    style={{
                                        width: '60px', 
                                        objectFit: 'cover',
                                        marginRight: '16px'
                                    }}
                                />
                                <Typography
                                    noWrap = {false}
                                    sx={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: "normal"
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Paper>
            )}
        </Box>
    );
}

export default SearchBoxOpen;
