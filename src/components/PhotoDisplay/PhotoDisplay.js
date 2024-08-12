import React, { useState, useEffect } from 'react';
import { Box, Avatar, Button, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography, DialogContent } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';


export default function PhotoDisplay({ user, handleClickSnackbar, logInEmail }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [avatar, setAvatar] = useState()

    const handleAddPhoto = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = (value) => {
        setOpenDialog(false);
        setAvatar()
    };

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    const handleConfirmChange = () => {
        let user_info = JSON.parse(localStorage.getItem("user_info"));
        user_info.photoURL = avatar.preview
        localStorage.setItem("user_info",JSON.stringify(user_info))
        handleClickSnackbar("Sorry this function have not been finished","success")
        handleCloseDialog()
    }

    return (
        <Box
            sx={{
                width: "90%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
            }}
        >
            {user ? (
                <Avatar
                    src={user?.user?.photoURL}
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
                    {user?.user?.displayName?.trim()[0]}
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
            {logInEmail && <AddAPhotoIcon
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
            />}

            <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
                <DialogTitle>Add photo</DialogTitle>
                <DialogContent sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <input style ={{marginBottom: "20px"}}
                        type="file"
                        onChange={handlePreviewAvatar}
                    />
                    {avatar && (
                        <>
                            <Avatar src={avatar.preview} sx={{
                            width: "20vw",
                            height: "20vw",
                            mb: 5,
                            position: "relative",
                            minWidth: "200px",
                            minHeight: "200px"}} />
                            <Button variant="contained" onClick={handleConfirmChange}>Confirm change</Button>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
}

