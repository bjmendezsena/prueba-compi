import { obtenerTodosLosRincones } from "../../services/service";
import {RINCONES_TYPES} from './rinconesTypes';

export const obtenerListaDeRincones = () => {
  return async (dispatch) => {
    dispatch(obtenerListaRinconesStart());
    const [rinconesError, rincones] = await obtenerTodosLosRincones();

    if (rinconesError) {
      dispatch(
        obtenerListaRinconesFailed(
          "Ha ocurrido un error al tratar de buscar los rincones"
        )
      );
    } else {
      dispatch(obtenerListaRinconesFinish(rincones));
    }
  };
};

const obtenerListaRinconesStart = () => ({
  type: RINCONES_TYPES.OBTENER_LISTA_RINCONES_START,
});
const obtenerListaRinconesFinish = (rincones) => ({
  type: RINCONES_TYPES.OBTENER_LISTA_RINCONES_FINISH,
  payload: rincones,
});

const obtenerListaRinconesFailed = (error) => ({
  type: RINCONES_TYPES.OBTENER_LISTA_RINCONES_FAILED,
  payload: error,
});
