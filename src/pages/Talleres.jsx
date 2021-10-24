import Items from "../components/items/Items";
import SectionHeader from "../components/header/SectionHeader";
import Dialog from "../components/dialog/Dialog";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { useSelector } from "react-redux";
import { talleresSelector } from "../redux/talleres/talleresSelector";

export default function Talleres() {
  const {listaTalleres, error, isLoading} = useSelector(talleresSelector);
  const message = isLoading && "Buscando talleres...";

  const isMobileWindow = useWindowWidth();

  if (error) return <Dialog message={error} />;

  return (
    <>
      {isMobileWindow && <SectionHeader heading="Rincones" />}
      <main>
        {isMobileWindow ? (
          <h2>Talleres</h2>
        ) : (
          <SectionHeader heading="Talleres" />
        )}
        {isLoading ? (
          <Dialog message={message} />
        ) : (
          <Items items={listaTalleres} />
        )}
      </main>
    </>
  );
}
