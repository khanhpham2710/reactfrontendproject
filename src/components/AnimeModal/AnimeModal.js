import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import './AnimeModal.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CloseButton = styled(CloseIcon)({
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

const ReadMoreButton = styled(Button)(() => ({
    position: 'absolute',
    bottom: '2%',
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "red",
    color: '#fff',
    border: "red 1px solid",
    '&:hover': {
        backgroundColor: "#000",
    }
}));

export default function AnimeModal(prop) {
    const { open, handleClose, item } = prop;
    const link = `/anime/${item.mal_id}`;
    const fontSize = {
        xs: "13px",
        sm: "16px",
        md: "17px",
        lg: "18px",
        xl: "20px"
    };

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
                    <Grid item xs={5} sm={4} md={3} lg={2.5} xl={2} p={{
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 3,
                        xl: 5
                    }}>
                        <Box
                            className="img_container"
                            sx={{
                                border: "5px solid",
                                borderRadius: "15px",
                                height: "100%",
                                overflow: "hidden",
                                position: "relative",
                            }}>
                            <img
                                src={item.images.jpg.image_url}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "15px",
                                }}
                            />
                            <ReadMoreButton component={Link} to={link}>
                                Read More
                            </ReadMoreButton>
                        </Box>
                    </Grid>
                    <Grid item xs={7} sm={8} md={9} lg={9.5} xl={10} p={1}>
                        <Box sx={{
                            border: "2px solid",
                            borderRadius: "15px",
                            height: "100%",
                            pt: 1, px: 2
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
                            sm: "180px",
                            md: "180px",
                            lg: "180px",
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
