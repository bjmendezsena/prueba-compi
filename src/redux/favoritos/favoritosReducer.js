import { FAVOURITES_TYPES } from "./favoritosTypes";

const initialState = {
  favoritos: [],
};

export const favoritosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVOURITES_TYPES.ADD_TO_FAVORITE:
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload],
      };
    case FAVOURITES_TYPES.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoritos: state.favoritos.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
