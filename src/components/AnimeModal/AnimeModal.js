import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Grid, SvgIcon, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import "./AnimeModal.css";
import MyButton from '../MyButton/MyButton';
import { Link } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CloseButton = styled(SvgIcon)({
    position: 'absolute',
    top: 5,
    right: 5,
    fontSize: "30px",
    color: "#fff",
    opacity: 0.7,
    cursor: 'pointer',
    "&:hover": {
        opacity: 1,
        backgroundColor: "transparent"
    }
});

export default function AnimeModal(prop) {
    const { open, handleClose, item } = prop;
    const link = "/anime/" + item.mal_id
    const fontSize = {
        xs: "14px",
        sm: "16px",
        md: "17px",
        lg: "18px",
        xl: "20px"
    }


    return (
        <Dialog
            open={open}
            fullWidth
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
                textAlign: "center",
                borderBottom: "2px solid #ccc",
                fontWeight: 800,
                fontSize: {
                    xs: "15px",
                    sm: "30px",
                    md: "40px",
                    lg: "45px",
                },
                paddingX: 4
            }}>
                {item.title}
            </DialogTitle>
            <DialogContent sx={{ display: "flex", mt: 2, gap: 2 }}>
                <Grid container rowSpacing={1} columnSpacing={0.1}>
                    <Grid item xs={4} sm={4} md={4} lg={3} p={1}>
                        <Box
                            className="img_container" sx={{
                                width: "100%",
                                p: 1,
                                border: "2px solid #fff",
                                borderRadius: "15px",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: "10px",
                                aspectRatio: "9 / 14 "
                            }}>
                            <img
                                src={item.images.jpg.image_url}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                            />
                            <Box sx={{display: "flex", justifyContent: "center"}}>
                            <Link to={link}>
                                <MyButton context="Read More" />
                            </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={9} p={1}>
                        <Box sx={{
                            border: "2px solid #fff",
                            borderRadius: "15px",
                            height: "100%",
                            pt: 2, px: 3
                        }}>
                            <Typography variant='body1' sx={{
                                fontSize: fontSize,
                            }} gutterBottom>
                                Type: {item.type || 'N/A'}
                            </Typography>
                            <Typography variant='body1' sx={{
                                fontSize: fontSize,
                            }} gutterBottom>
                                Status: {item.status || 'N/A'}
                            </Typography>
                            <Typography variant='body1' sx={{
                                fontSize: fontSize,
                            }} gutterBottom>
                                Source: {item.source || 'N/A'}
                            </Typography>
                            <Typography variant='body1' sx={{
                                fontSize: fontSize,
                            }} gutterBottom>
                                Season: {item.season || 'N/A'}
                            </Typography>
                            <Typography variant='body1' sx={{ fontSize: fontSize }} gutterBottom>
                                Aired: {item?.aired?.string || 'N/A'}
                            </Typography>
                            <Typography variant='body1' sx={{ fontSize: fontSize }} gutterBottom>
                                Episodes: {item.episodes || 'N/A'}
                            </Typography>
                            <Typography variant='body1' sx={{ fontSize: fontSize }} gutterBottom>
                                Duration: {item.duration || 'N/A'}
                            </Typography>
                            <Typography variant='body1' sx={{ fontSize: fontSize }} gutterBottom>
                                Studios: {item.studios?.map(studio => studio.name).join(', ') || 'N/A'}
                            </Typography>
                            <Typography variant='body1' sx={{ fontSize: fontSize }} gutterBottom>
                                Genres: {item.genres?.map(genre => genre.name).join(', ') || 'N/A'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{
                        maxHeight:
                        {
                            xs: "300px",
                            sm: "250px",
                            md: "200px",
                            lg: "250px",
                            xl: "250px",
                        },
                        overflowY: "auto"
                    }}>
                        <Box sx={{
                            height: "100%",
                            overflowY: "auto",
                            padding: 1
                        }} className="dialog_synopsis">
                            <Typography variant='body1' sx={{
                                fontSize: fontSize,
                                letterSpacing: "0.5px"
                            }}>
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
