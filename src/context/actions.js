import { ACTION_TYPES } from "./types";

export const actions = {
  obtenerListaTalleresStart: () => ({
    type: ACTION_TYPES.OBTENER_LISTA_TALLERES_START,
  }),
  obtenerListaTalleresFinish: (talleres) => ({
    type: ACTION_TYPES.OBTENER_LISTA_TALLERES_FINISH,
    payload: talleres,
  }),
  obtenerListaTalleresFailed: (error) => ({
    type: ACTION_TYPES.OBTENER_LISTA_TALLERES_FAILED,
    payload: error,
  }),

  obtenerListaRinconesStart: () => ({
    type: ACTION_TYPES.OBTENER_LISTA_RINCONES_START,
  }),
  obtenerListaRinconesFinish: (rincones) => ({
    type: ACTION_TYPES.OBTENER_LISTA_RINCONES_FINISH,
    payload: rincones,
  }),

  obtenerListaRinconesFailed: (error) => ({
    type: ACTION_TYPES.OBTENER_LISTA_RINCONES_FAILED,
    payload: error,
  }),

  addToFavorite: (item) => ({
    type: ACTION_TYPES.ADD_TO_FAVORITE,
    payload: item,
  }),
  removeFromFavorite: (item) => ({
    type: ACTION_TYPES.REMOVE_FROM_FAVORITE,
    payload: item,
  }),
};
