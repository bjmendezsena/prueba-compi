import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import {talleresReducer} from '../redux/talleres/talleresReducer'
import thunk from "redux-thunk";
import { rinconesReducer } from "../redux/rincones/rinconesReducer";
import { favoritosReducer } from "../redux/favoritos/favoritosReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


const reducers = combineReducers({
  talleres: talleresReducer,
  listaRincones:rinconesReducer,
  favoritos:favoritosReducer
});

const appStore = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default appStore;
