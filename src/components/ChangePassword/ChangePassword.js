import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormHelperText from '@mui/material/FormHelperText';
import MySnackBars from "../MySnackbars/MySnackbars"

export default function ChangePassword({ handleClickSnackbar }) {
    const [open, setOpen] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setErrorMessage('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!password.trim() || !confirmPassword.trim()) {
            setErrorMessage("Please don't leave password fields blank");
            return;
        } else if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        
        
        let userInfo = JSON.parse(localStorage.getItem("user_info"));
        userInfo = { ...userInfo, password: password };
        localStorage.setItem("user_info", JSON.stringify(userInfo));
        
        
        handleClickSnackbar("Change password successful", "success");
        handleClose();
    };

    return (
        <React.Fragment>
            <Button variant="contained" onClick={handleClickOpen}>
                Change Password
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmit,
                }}
                sx={{ minWidth: "400px" }} 
            >
                <DialogTitle>Change Password</DialogTitle>
                <DialogContent>
                    <TextField
                        label="New Password"
                        type="password"
                        fullWidth
                        margin="dense"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        margin="dense"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errorMessage && (
                        <FormHelperText sx={{ color: 'red' }}>
                            {errorMessage}
                        </FormHelperText>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" variant="contained">Change Password</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
