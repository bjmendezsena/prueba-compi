import views from "../pages/index";
import {
  TALLERES_PATH,
  RINCONES_PATH,
  DETAIL_PATH,
  FAVORITES_PATH,
  NOT_FOUND_PATH,
} from "./paths";

const { Talleres, Rincones, Detail, Favorites, NotFound } = views;

export const TALLERES = {
  path: TALLERES_PATH,
  component: Talleres,
  isExact: true,
};

export const RINCONES = {
  path: RINCONES_PATH,
  component: Rincones,
  isExact: false,
};

export const DETAIL = {
  path: DETAIL_PATH,
  component: Detail,
  isExact: false,
};

export const FAVORITES = {
  path: FAVORITES_PATH,
  component: Favorites,
  isExact: false,
};

export const NOT_FOUND = {
  path: NOT_FOUND_PATH,
  component: NotFound,
  isExact: false,
};

export default [TALLERES, RINCONES, DETAIL, FAVORITES, NOT_FOUND];
