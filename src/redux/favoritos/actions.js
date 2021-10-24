import { FAVOURITES_TYPES } from "./favoritosTypes";

export const agregarAFavoritos = (item) => ({
  type: FAVOURITES_TYPES.ADD_TO_FAVORITE,
  payload: item,
});

export const eliminarDeFavoritos = (item) => ({
  type: FAVOURITES_TYPES.REMOVE_FROM_FAVORITE,
  payload: item,
});
