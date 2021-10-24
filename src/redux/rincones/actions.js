import { RINCONES_TYPES } from "./rinconesTypes";

export const obtenerListaRinconesStart = () => ({
  type: RINCONES_TYPES.OBTENER_LISTA_RINCONES_START,
});
export const obtenerListaRinconesFinish = (rincones) => ({
  type: RINCONES_TYPES.OBTENER_LISTA_RINCONES_FINISH,
  payload: rincones,
});

export const obtenerListaRinconesFailed = (error) => ({
  type: RINCONES_TYPES.OBTENER_LISTA_RINCONES_FAILED,
  payload: error,
});
