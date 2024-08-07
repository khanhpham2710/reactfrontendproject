import React from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, Box } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { pages, settings } from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import SwitchMode from "../../global/switchMode";

function SideMenu({ toggleTheme }) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: "10vh", px: 2 }}>
            <SwitchMode toggleTheme={toggleTheme} />
                <IconButton
                    size="large"
                    aria-label="close navigation menu"
                    color="inherit"
                    onClick={toggleDrawer(false)}
                    sx={{ textAlign: "right" }}
                >
                    <CancelPresentationIcon sx={{ fontSize: "40px", transform: "scaleY(1.2)" }} />
                </IconButton>
            </Box>
            <Divider />
            <SearchBox />
            <Divider />
            <List>
                {pages.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={text.path}
                            sx={{
                                color: 'white', display: 'block', mr: 1,
                                transition: "color 0.5s ease-in-out, background-color 0.5s ease-in-out",
                                "&:hover": {
                                    color: "red",
                                    backgroundColor: "#121212"
                                }
                            }}>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {settings.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={text.path}
                            sx={{
                                color: 'white', display: 'block', mr: 1,
                                transition: "color 0.5s ease-in-out, background-color 0.5s ease-in-out",
                                "&:hover": {
                                    color: "red",
                                    backgroundColor: "#121212"
                                }
                            }}>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <IconButton
                size="large"
                aria-label="open navigation menu"
                color="inherit"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon sx={{ fontSize: "40px" }} />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default SideMenu;
