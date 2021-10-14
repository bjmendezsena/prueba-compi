import {
  card,
  cardImage,
  cardTitle,
  cardDescription,
  favoriteCard,
  favoriteCardSelected,
} from "./Items.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { DETAIL_PATH } from "../../routing/paths";
import { AppContext } from "../../context/AppContext";

export default function Card({ item, removeFavorite }) {
  const { eliminarDeFavoritos, addToFavorite, favoritos } =
    useContext(AppContext);
  const { id, image, tag, title, description } = item;

  const isFavorite = favoritos.some((it) => it.id === item.id);

  const classSelected = isFavorite ? favoriteCardSelected : "";

  const onClickFavourite = (addFavorite) => {
    console.log(addFavorite)
    if (addFavorite) {
      return addToFavorite(item);
    }
    eliminarDeFavoritos(item);
  };

  return (
    <li className={card}>
      <Link to={`${DETAIL_PATH}/${id}`}>
        <div>
          <img src={image} alt={("image", tag)} className={cardImage} />
          <h4 className={cardTitle}>{title}</h4>
          <p className={cardDescription}>{description}</p>
        </div>
      </Link>

      <div>
        <button onClick={() => onClickFavourite(!isFavorite)}>
          <p className={`${favoriteCard} ${classSelected}`}>
            <span>{isFavorite ? <IoIosHeart /> : <IoIosHeartEmpty />}</span>{" "}
            Favorito
          </p>
        </button>
      </div>
    </li>
  );
}
