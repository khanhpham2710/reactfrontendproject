import * as React from 'react';
import { useState } from 'react';
import { Box, Drawer } from '@mui/material';
import Header from "../Header/Header"
import SearchBox from "../SearchBox/SearchBox"
import SearchIcon from '@mui/icons-material/Search';

function SearchBoxOpen() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <React.Fragment>
            <SearchIcon onClick={toggleDrawer(true)}>Open</SearchIcon>
            <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Header/>
                <Box
                    sx={{ width: 'auto', mt: "10vh"}}
                    role="presentation">
                    <SearchBox />
                </Box>
            </Drawer>
        </React.Fragment>
    );
}

export default SearchBoxOpen;
