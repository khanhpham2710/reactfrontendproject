import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, DialogContentText, Grid, SvgIcon, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import "./AnimeModal.css"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CloseButton = styled(SvgIcon)({
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: "50px",
    color: "#fff",
    opacity: 0.7,
    "&:hover": {
        opacity: 1,
        backgroundColor: "transparent"
    }
});

export default function AnimeModal(prop) {
    const { open, handleClose, item } = prop;
    const [fullWidth, setFullWidth] = React.useState(true);

    return (
        <Dialog
            open={open}
            fullWidth={fullWidth}
            maxWidth="lg"
            TransitionComponent={Transition}
            keepMounted
            onClose={(e) => {
                e.stopPropagation();
                handleClose();
            }}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle variant='h4' sx={{
                textAlign: "center", borderBottom: "2px solid #ccc", fontWeight: 800, letterSpacing: 4, fontSize: {
                    xs: "25px",
                    sm: "30px",
                    md: "40px",
                    lg: "50px",
                }
            }}>
                {item.title}
            </DialogTitle>
            <DialogContent sx={{ display: "flex", mt: 2, gap: 2 }}>
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={5} sm={5} md={4} lg={3} p={1}>
                        <Box className="img_container" sx={{ width: "100%", p: 1, border: "2px solid #fff", borderRadius: "15px", display: "flex", justifyContent: "center" }}>
                            <img
                                src={item.images.jpg.image_url}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={7} sm={7} md={8} lg={9} p={1}>
                        <Box sx={{ border: "2px solid #fff", borderRadius: "15px", display: "flex", justifyContent: "center", height: "100%" }}>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ maxHeight: "300px", overflowY: "auto" }}>
                        <Box sx={{ height: "100%", overflowY: "auto", padding: 1 }} className="dialog_synopsis">
                            <Typography variant='body1'>
                                {item.synopsis}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <CloseButton onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                }}>
                    <CloseIcon />
                </CloseButton>
            </DialogActions>
        </Dialog>
    );
}


