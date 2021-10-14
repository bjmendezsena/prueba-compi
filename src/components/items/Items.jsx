import { useContext, useState } from "react";
import { itemTitle } from "./Items.module.css";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import GridCards from "./GridCards";
import { AppContext } from "../../context/AppContext";

export default function Items({ items }) {
  const [isSort, setIsSort] = useState(false);
  const isMobileWindow = useWindowWidth();

  const sectionsItems = items.map(({ sectionName, resources }) => {
    return (
      <div key={sectionName}>
        <div className={itemTitle}>
          {!isMobileWindow && <h3>{sectionName}</h3>}
          <button onClick={() => setIsSort(!isSort)}>Ordenar A-Z</button>
        </div>
        <GridCards resources={resources} sort={isSort} />
      </div>
    );
  });

  return <div>{sectionsItems}</div>;
}
