import React, { useEffect, useState } from "react";
import { containerCards } from "./Items.module.css";
import { addFavorite, removeFavorite } from "../../services/handleFavorites.js";
import Card from "./Card";

export default function GridCards({ resources, sort }) {


  // useEffect(() => {
  //   const sortedItems = sort
  //     ? resources.sort((a, b) => b.title.localeCompare(a.title))
  //     : resources.sort((a, b) => a.title.localeCompare(b.title));
  //   setList(sortedItems);
  // }, [sort]);

  return (
    <ul className={containerCards}>
      {React.Children.toArray(resources.map((item, index) => <Card item={item} />))}
    </ul>
  );
}
