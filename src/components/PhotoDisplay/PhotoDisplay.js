import React, { useState, useEffect } from 'react';
import { Box, Avatar, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useAuth } from '../../global/authContext/authContext';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function PhotoDisplay({ handleClickSnackbar }) {
    const { currentUser, setCurrentUser, userLoggedIn } = useAuth();
    const [openDialog, setOpenDialog] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const storage = getStorage(); 

    const handleAddPhoto = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setAvatar(null);
    };

    useEffect(() => {
        return () => {
            if (avatar && avatar.preview) {
                URL.revokeObjectURL(avatar.preview);
            }
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        if (file) {
            file.preview = URL.createObjectURL(file);
            setAvatar(file);
        }
    };

    const handleConfirmChange = async () => {
        if (avatar) {
            try {
                const storageRef = ref(storage, `profile_pictures/${currentUser.uid}`);
                await uploadBytes(storageRef, avatar);
                const downloadURL = await getDownloadURL(storageRef);

                await currentUser.updateProfile({ photoURL: downloadURL });
                setCurrentUser({ ...currentUser, photoURL: downloadURL });
                handleClickSnackbar("Photo updated successfully", "success");
            } catch (error) {
                handleClickSnackbar("An error occurred while updating photo.", "error");
                console.error(error);
            }
            handleClickSnackbar("Sorry this function is still being developed", "success");
            handleCloseDialog();
        }
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
            {userLoggedIn ? (
                <Avatar
                    src={currentUser?.photoURL}
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
                    {currentUser?.displayName?.trim()[0]}
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
                <DialogTitle>Add photo</DialogTitle>
                <DialogContent sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <input style={{ marginBottom: "20px" }}
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
                                minHeight: "200px"
                            }} />
                            <Button variant="contained" onClick={handleConfirmChange}>Confirm change</Button>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
}
