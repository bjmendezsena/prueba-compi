import { ACTION_TYPES } from "./types";

export const initialState = {
  listaTalleres: [],
  listaRincones: [],
  favoritos: [],
  isLoading: false,
  errorTalleres: null,
  errorRincones: null,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_FAVORITE:
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload],
      };
    case ACTION_TYPES.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoritos: state.favoritos.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case ACTION_TYPES.OBTENER_LISTA_RINCONES_START:
    case ACTION_TYPES.OBTENER_LISTA_TALLERES_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.OBTENER_LISTA_RINCONES_FINISH:
      return {
        ...state,
        isLoading: false,
        listaRincones: action.payload,
      };

    case ACTION_TYPES.OBTENER_LISTA_TALLERES_FAILED:
      return {
        ...state,
        errorTalleres: action.payload,
        isLoading: false,
      };
    case ACTION_TYPES.OBTENER_LISTA_RINCONES_FAILED:
      return {
        ...state,
        errorRincones: action.payload,
        isLoading: false,
      };
    case ACTION_TYPES.OBTENER_LISTA_TALLERES_FINISH:
      return {
        ...state,
        listaTalleres: action.payload,
      };
    default:
      return state;
  }
};
