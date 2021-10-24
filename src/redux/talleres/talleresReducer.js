import { TALLERES_TYPES } from "./talleresTypes";

const initialState = {
  listaTalleres: [],
  isLoading: false,
  error: null,
  talleresFavoritos: [],
};

export const talleresReducer = (state = initialState, action) => {
  switch (action.type) {
    case TALLERES_TYPES.OBTENER_LISTA_TALLERES_START:
      return {
        ...state,
        isLoading: true,
      };
    case TALLERES_TYPES.OBTENER_LISTA_TALLERES_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case TALLERES_TYPES.OBTENER_LISTA_TALLERES_FINISH:
      return {
        ...state,
        listaTalleres: action.payload,
        isLoading: false,
      };
    case TALLERES_TYPES.ADD_TO_FAVORITE:
      return {
        ...state,
        talleresFavoritos: [...state.talleresFavoritos, action.payload],
      };
    case TALLERES_TYPES.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        talleresFavoritos: state.talleresFavoritos.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
