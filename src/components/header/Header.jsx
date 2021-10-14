import { Link, useLocation } from "react-router-dom";
import {
  appHeader,
  navButton,
  activeButton,
  navBar,
} from "./Header.module.css";
import { TALLERES_PATH, RINCONES_PATH } from "../../routing/paths";
import { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GiMountainCave } from "react-icons/gi";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export default function Header() {
  const [active, setActive] = useState(true);
  const handleToggle = () => setActive(!active);

  const NORMAL_BUTTON = navButton;
  const ACTIVE_BUTTON = `${navButton} ${activeButton}`;

  const location = useLocation();
  const showHeader = location.pathname.includes("resource");

  const isMobileWindow = useWindowWidth();

  return (
    !showHeader && (
      <header className={appHeader}>
        <nav className={navBar}>
          <Link to={TALLERES_PATH}>
            <button
              className={active ? `${ACTIVE_BUTTON}` : `${NORMAL_BUTTON}`}
              onClick={handleToggle}
            >
              {isMobileWindow ? <GiMountainCave /> : ""}
              Talleres
            </button>
          </Link>
          <Link to={RINCONES_PATH}>
            <button
              className={active ? `${NORMAL_BUTTON}` : `${ACTIVE_BUTTON}`}
              onClick={handleToggle}
            >
              {isMobileWindow ? <AiOutlineAppstoreAdd /> : ""}
              Rincones
            </button>
          </Link>
        </nav>
      </header>
    )
  );
}
