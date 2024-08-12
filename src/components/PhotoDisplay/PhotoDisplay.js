import React, { useState } from 'react';
import { Box, Avatar, Button, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function PhotoDisplay({ user }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedValue, setSelectedValue] = useState(emails[1]);

    const handleAddPhoto = () => {
        const logInEmail = JSON.parse(localStorage.getItem("logInEmail"));
        const logInGoogle = JSON.parse(localStorage.getItem("logInGoogle"));
        if (logInGoogle) {
            alert("You are logging in with Google");
        } else if (logInEmail) {
            setOpenDialog(true);
        }
    };

    const handleCloseDialog = (value) => {
        setOpenDialog(false);
        setSelectedValue(value);
    };

    return (
        <Box
            width="100%"
            sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
            }}
        >
            {user ? (
                <Avatar
                    src={user.photoURL}
                    sx={{
                        width: "20vw",
                        height: "20vw",
                        position: "relative",
                        minWidth: "200px",
                        minHeight: "200px",
                        fontSize: {
                            xs: "100px",
                            md: "120px",
                            lg: "150px",
                        }
                    }}
                >
                    {user?.displayName?.trim()[0]}
                </Avatar>
            ) : (
                <Avatar sx={{
                    width: "20vw",
                    height: "20vw",
                    position: "relative",
                    minWidth: "200px",
                    minHeight: "200px",
                    fontSize: {
                        xs: "100px",
                        md: "120px",
                        lg: "150px",
                    }
                }} />
            )}
            <AddAPhotoIcon
                onClick={handleAddPhoto}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    zIndex: 1,
                    borderRadius: "0%",
                    opacity: "0 !important",
                    transition: "opacity 0.5s linear",
                    fontSize: "140px",
                    "&:hover": {
                        opacity: "1 !important"
                    }
                }}
            />

            <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
                <DialogTitle>Set backup account</DialogTitle>
                <List sx={{ pt: 0 }}>
                    {emails.map((email) => (
                        <ListItem disableGutters key={email}>
                            <ListItemButton onClick={() => handleCloseDialog(email)}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={email} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disableGutters>
                        <ListItemButton autoFocus onClick={() => handleCloseDialog('addAccount')}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AddIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Add account" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Dialog>
        </Box>
    );
}

export default PhotoDisplay;
