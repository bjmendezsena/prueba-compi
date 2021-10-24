import { RINCONES_TYPES } from "./rinconesTypes";

const initialState = {
  listaRincones: [],
  isLoading: false,
  rinconesFavoritos: [],
  error: null,
};

export const rinconesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RINCONES_TYPES.OBTENER_LISTA_RINCONES_START:
      return {
        ...state,
        isLoading: true,
      };
    case RINCONES_TYPES.OBTENER_LISTA_RINCONES_FINISH:
      return {
        ...state,
        listaRincones: action.payload,
        isLoading: false,
      };
    case RINCONES_TYPES.OBTENER_LISTA_RINCONES_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case RINCONES_TYPES.ADD_TO_FAVORITE:
      return {
        ...state,
        rinconesFavoritos: [...state.rinconesFavoritos, action.payload],
      };
    case RINCONES_TYPES.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        rinconesFavoritos: state.rinconesFavoritos.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
