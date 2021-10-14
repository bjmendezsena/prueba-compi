import {
  favoritesHeader,
  sectionTitle,
  favorites,
  icon,
} from "./SectionHeader.module.css";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FAVORITES_PATH } from "../../routing/paths";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export default function SectionHeader({ heading }) {
  const isMobileWindow = useWindowWidth();

  return (
    <>
      {isMobileWindow ? (
        <section className={favoritesHeader}>
          <Link to={FAVORITES_PATH}>
            <button className={favorites}>
              <p>
                <span className={icon}>
                  <FaEye />
                </span>
                Ver favoritos
              </p>
            </button>
          </Link>
        </section>
      ) : (
        <section className={sectionTitle}>
          <h1>{heading}</h1>
          <Link to={FAVORITES_PATH}>
            <button className={favorites}>
              <span className={icon}>
                <FaEye />
              </span>
              Ver favoritos
            </button>
          </Link>
        </section>
      )}
    </>
  );
}
