import React, { useState } from "react";

function MovieItem({ id, onHover }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        transform: hovered ? "scale(1.05)" : "scale(1)",
      }}
      onMouseEnter={() => {
        setHovered(true);
        onHover(id, true);
      }}
      onMouseLeave={() => {
        setHovered(false);
        onHover(id, false);
      }}
    >
      {hovered ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16 / 9" }}
          src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      ) : (
        <img
          src={`https://img.youtube.com/vi/${id}/0.jpg`}
          alt="thumbnail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </div>
  );
}

export default MovieItem;
