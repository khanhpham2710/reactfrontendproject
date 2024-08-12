import React, { useState } from 'react';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import Backdrop from '@mui/material/Backdrop';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';


const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      boxShadow: theme.shadows[1],
      padding: "5px 25px",
      fontSize: 20,
    },
  }));

export default function PlayButton({ id, setPlay }) {
    const [open, setOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    const handleOpen = () => {
        setVideoSrc(`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&fs=0`);
        setOpen(true);
        setPlay(true);
    };

    const handleClose = () => {
        setOpen(false);
        setVideoSrc('');
        setPlay(false);
    };

    const buttonStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: 80,
        color: "red",
        background: "white",
        borderRadius: "50%",
        zIndex: 5, 
        '&:hover': {
            animation: 'aura 0.5s infinite alternate'
        }
    };

    return (
        <React.Fragment>
            <LightTooltip title="Play">
                <PlayCircleFilledRoundedIcon
                    onClick={handleOpen}
                    sx={buttonStyle}
                />
            </LightTooltip>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1, 
                    position: 'fixed', 
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                }}
                open={open}
                onClick={handleClose}
            >
                {videoSrc && (
                    <iframe
                        width="80%"
                        height="auto"
                        src={videoSrc}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ aspectRatio: '16 / 9' }}  
                    ></iframe>
                )}
            </Backdrop>
        </React.Fragment>
    );
}
