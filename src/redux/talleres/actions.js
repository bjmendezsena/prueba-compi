import { obtenerTodosLosTalleres } from "../../services/service";
import { TALLERES_TYPES } from "./talleresTypes";

export const obenerListaDeTalleres = () => {
  return async (dispatch) => {
    dispatch(obtenerListaTalleresStart());
    const [talleresError, talleres] = await obtenerTodosLosTalleres();
    if (talleresError) {
      dispatch(
        obtenerListaTalleresFailed(
          "Ha ocurrido un error al tratar de buscar los talleres"
        )
      );
    } else {
      dispatch(obtenerListaTalleresFinish(talleres));
    }
  };
};

const obtenerListaTalleresStart = () => ({
  type: TALLERES_TYPES.OBTENER_LISTA_TALLERES_START,
});

const obtenerListaTalleresFailed = (error) => ({
  type: TALLERES_TYPES.OBTENER_LISTA_TALLERES_FAILED,
  payload: error,
});

const obtenerListaTalleresFinish = (talleres) => ({
  type: TALLERES_TYPES.OBTENER_LISTA_TALLERES_FINISH,
  payload: talleres,
});
