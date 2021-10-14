import React, { createContext, useEffect, useReducer } from "react";
import {
  obtenerTodosLosRincones,
  obtenerTodosLosTalleres,
} from "../services/service";
import { actions } from "./actions";
import { appReducer, initialState } from "./appReducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    dispatch(actions.obtenerListaRinconesStart());
    dispatch(actions.obtenerListaTalleresStart());

    const [talleresError, talleres] = await obtenerTodosLosTalleres();
    const [rinconesError, rincones] = await obtenerTodosLosRincones();

    if (talleresError) {
      dispatch(
        actions.obtenerListaTalleresFailed(
          "Ha ocurrido un error al tratar de buscar los talleres"
        )
      );
    } else {
      dispatch(actions.obtenerListaTalleresFinish(talleres));
    }

    if (rinconesError) {
      dispatch(
        actions.obtenerListaRinconesFailed(
          "Ha ocurrido un error al tratar de buscar los rincones"
        )
      );
    } else {
      dispatch(actions.obtenerListaRinconesFinish(rincones));
    }
  };

  const eliminarDeFavoritos = (item) => {
    dispatch(actions.removeFromFavorite(item));
  };

  const addToFavorite = (item) => {
    dispatch(actions.addToFavorite(item));
  };

  return (
    <AppContext.Provider
      value={{ ...state, eliminarDeFavoritos, addToFavorite }}
    >
      {children}
    </AppContext.Provider>
  );
};
