import './AnimeCard.css';
import { useState } from 'react';
import AnimeModal from "../AnimeModal/AnimeModal"

function AnimeCard({ item }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="anime_card" onClick={handleClickOpen}>
      <div className="image_container">
        <img src={item.images.jpg.image_url} alt={item.title} />
      </div>
      <div className="title">
        <p>{item.title}</p>
      </div>
      {open && <AnimeModal handleClose={handleClose} item={item} setOpen={setOpen}/>}
    </div>
  );
}

export default AnimeCard;
