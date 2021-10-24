import { httpManager } from "./api/httpManager";

const TALLERES_URL = "/talleres";
const RINCONES_URL = "/rincones";




export const obtenerTodosLosTalleres = async () => {
  try {
    const { data } = await httpManager.get(TALLERES_URL);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};


export const obtenerTodosLosRincones = async () => {
  try {
    const { data } = await httpManager.get(RINCONES_URL);

    return [null, data];
  } catch (error) {

    return [error, null];
  }
};
