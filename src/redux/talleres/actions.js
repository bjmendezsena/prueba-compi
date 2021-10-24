import { obtenerTodosLosTalleres } from "../../services/service";
import { TALLERES_TYPES } from "./talleresTypes";

export const obtenerListaTalleresStart = () => ({
  type: TALLERES_TYPES.OBTENER_LISTA_TALLERES_START,
});

export const obtenerListaTalleresFailed = (error) => ({
  type: TALLERES_TYPES.OBTENER_LISTA_TALLERES_FAILED,
  payload: error,
});

export const obtenerListaTalleresFinish = (talleres) => ({
  type: TALLERES_TYPES.OBTENER_LISTA_TALLERES_FINISH,
  payload: talleres,
});
