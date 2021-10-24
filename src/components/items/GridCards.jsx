import React, { useEffect, useState } from "react";
import { containerCards } from "./Items.module.css";
import Card from "./Card";

export default function GridCards({ resources, sort }) {

  return (
    <ul className={containerCards}>
      {React.Children.toArray(resources.map((item, index) => <Card item={item} />))}
    </ul>
  );
}
