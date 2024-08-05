import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Opacity } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CloseButton = styled(Button)({
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: "20px",
    color: "#fff",
    opacity: 0.7,
    "&:hover": {
        opacity: 1,
        backgroundColor: "transparent"
    }
});

export default function AnimeModal(prop) {
    const { open, handleClose, setOpen, item } = prop
    const [fullWidth, setFullWidth] = React.useState(true);

    console.log(item)

    return (
        <Dialog
            open={open}
            fullWidth={fullWidth}
            maxWidth="xl"
            TransitionComponent={Transition}
            keepMounted
            onClose={(e) => {
                e.stopPropagation();
                handleClose();
            }}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle variant='h4' sx={{textAlign:"center", borderBottom: "2px solid #ccc", fontWeight: 800, letterSpacing: 4}}>{item.title}</DialogTitle>
            <DialogContent sx={{ display: "flex", mt: 2, gap: 2 }}>
                <Box>
                    <img src={item.images.jpg.image_url} alt={item.title} />
                </Box>
                <Box>
                    <DialogContentText id="alert-dialog-slide-description">
                        {item.synopsis}
                    </DialogContentText>
                </Box>
            </DialogContent>
            <DialogActions>
                <CloseButton onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                }}><CloseIcon/></CloseButton>
            </DialogActions>
        </Dialog>
    );
}
