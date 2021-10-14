import { lazy } from "react";

const Detail = lazy(() => import("./Detail"));
const Talleres = lazy(() => import("./Talleres"));
const Rincones = lazy(() => import("./Rincones"));
const Favorites = lazy(() => import("./Favorites"));
const NotFound = lazy(() => import("./NotFound"));

export default { Detail, Talleres, Rincones, Favorites, NotFound };
