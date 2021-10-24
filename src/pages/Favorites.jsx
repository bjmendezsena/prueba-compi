import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { TALLERES_PATH } from "../routing/paths";
import { buttonBack } from "./Favorite.module.css";
import GridCards from "../components/items/GridCards";
import Dialog from "../components/dialog/Dialog";
import { useSelector } from "react-redux";
import { favoritosSelector } from "../redux/favoritos/favoritosSelector";

export default function Favorites() {
  const { favoritos } = useSelector(favoritosSelector);

  const history = useHistory();
  const message = "Aún no has añadido recursos a tus favoritos ¿añadimos?";

  return (
    <main>
      <h1>
        <button onClick={() => history.goBack()} className={buttonBack}>
          <FaArrowLeft />
        </button>
        <span>Favoritos</span>
      </h1>
      {favoritos.length ? (
        <GridCards resources={favoritos} />
      ) : (
        <Dialog message={message} link={TALLERES_PATH} />
      )}
    </main>
  );
}
