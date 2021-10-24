import SectionHeader from "../components/header/SectionHeader";
import Items from "../components/items/Items";
import Dialog from "../components/dialog/Dialog";
import { useWindowWidth } from "../hooks/useWindowWidth";

import { useSelector } from "react-redux";
import { rinconesSelector } from "../redux/rincones/rinconesSelector";

export default function Rincones() {
  const {listaRincones, error, isLoading} = useSelector(rinconesSelector);
  const message = "Buscando Rincones...";

  const isMobileWindow = useWindowWidth();

  if (error) return <Dialog message={error} />;

  return (
    <>
      {isMobileWindow && <SectionHeader heading="Rincones" />}
      <main>
        {isMobileWindow ? (
          <h2>Rincones</h2>
        ) : (
          <SectionHeader heading="Rincones" />
        )}
        {isLoading ? (
          <Dialog message={message} />
        ) : (
          <Items items={listaRincones} />
        )}
      </main>
    </>
  );
}
