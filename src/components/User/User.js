import React from 'react'
import { Box, Tooltip, IconButton, Avatar, Menu, Typography, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom';

const settings = [
    { name: 'Profile', path: "/profile" },
    { name: 'Account', path: "/account" },
    { name: 'Logout' },
];

function User() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting, index) => (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                        <Link to={setting.path}>
                            <Typography textAlign="center" variant="h5" sx={{ textDecoration: "none", color: "#fff" }}>{setting.name}</Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default User
