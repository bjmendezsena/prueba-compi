import SectionHeader from "../components/header/SectionHeader";
import Items from "../components/items/Items";
import Dialog from "../components/dialog/Dialog";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Rincones() {
  const { listaRincones, errorRincones, isLoading } = useContext(AppContext);
  const message = "Buscando Rincones...";

  const isMobileWindow = useWindowWidth();

  if (errorRincones) return <Dialog message={errorRincones} />;

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
