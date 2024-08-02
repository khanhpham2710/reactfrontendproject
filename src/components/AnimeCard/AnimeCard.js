import { Link } from "react-router-dom";
import "./AnimeCard.css"

function AnimeCard(prop){
    const { item } = prop
    return (
        <>
        <img src={item.images.jpg.image_url}/>
        <modal>

        </modal>
        </>
    )
}

export default AnimeCard;