import React, { useState } from 'react';
import MoviesSection from '../../components/MoviesSection/MoviesSection';
import videos from '../../assets/videos';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container } from "@mui/material";

function Watch() {
  const [selectedId, setSelectedId] = useState(videos[0].id);

  const handleSelectVideo = (id) => {
    setSelectedId(id);
  };


  return (
    <div style={{ marginTop: "10vh" }}>
      <Header />
      <Container maxWidth="lg">
        {selectedId &&
          <iframe
            width="100%"
            style={{aspectRatio: " 16 /9"}}
            src={`https://www.youtube.com/embed/${selectedId}?autoplay=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Selected Video"
          />}
        <MoviesSection list={videos} onSelectVideo={handleSelectVideo} />
      </Container >
      <Footer />
    </div >
  );
}

export default Watch;
