import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormHelperText from '@mui/material/FormHelperText';
import { doPasswordChange } from "../../firebase/auth"
import { useAuth } from '../../global/authContext/authContext';

export default function ChangePassword({ handleClickSnackbar }) {
    const [open, setOpen] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    const { userLoggedIn } =useAuth()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setErrorMessage('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!password.trim() || !confirmPassword.trim()) {
            setErrorMessage("Please don't leave password fields blank");
            return;
        } else if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        } else {
            try {
                await doPasswordChange(password);
                handleClickSnackbar("Change password successful", "success");
                handleClose();
            } catch (error) {
                handleClickSnackbar("An error occurred while changing the password", "error");
                console.error(error);
            }
        }
    };

    return (
        <React.Fragment>
            {userLoggedIn && <Button variant="contained" onClick={handleClickOpen}>
                Change Password
            </Button>}
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
