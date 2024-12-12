import React, { useRef, useEffect, useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Aos from "aos";

function Media({ heading, content, right, image, youtubeId }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const imgRef = useRef(null);
  const iframeRef = useRef(null);
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (imgRef.current) {
        const { width, height } = imgRef.current.getBoundingClientRect();
        setImgDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.style.width = `${imgDimensions.width * 0.65}px`;
      iframeRef.current.style.height = `${imgDimensions.height * 0.45}px`;
    }
  }, [imgDimensions]);

  return (
    <Container maxWidth="lg" sx={{ overflow: "hidden" }}>
      <Grid container columnSpacing={2} rowSpacing={4}>
        <Grid
          item
          xs={12}
          md={7}
          data-aos="fade-right"
          sx={{
            display: { xs: "none", md: right ? "none" : "block" },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              ref={imgRef}
              src={image}
              alt={heading}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                position: "relative",
                zIndex: 0,
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          data-aos={right ? "fade-right" : "fade-left"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" textAlign="center" mb={6}>
            {heading}
          </Typography>
          <Typography variant="h5" textAlign="center">
            {content}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          data-aos="fade-left"
          sx={{
            display: { xs: "block", md: right ? "block" : "none" },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              ref={imgRef}
              src={image}
              alt={heading}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                position: "relative",
                zIndex: 0,
              }}
            />
            {youtubeId && (
              <iframe
                title="video"
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&loop=1&playlist=${youtubeId}&mute=1&controls=0&showinfo=0&rel=0`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "60%",
                  height: "40%",
                  objectFit: "cover",
                  zIndex: -1,
                }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Media;
