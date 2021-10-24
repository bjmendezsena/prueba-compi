import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { talleresReducer } from "../redux/talleres/talleresReducer";
import createSagaMiddleware from "redux-saga";
import { rinconesReducer } from "../redux/rincones/rinconesReducer";
import { favoritosReducer } from "../redux/favoritos/favoritosReducer";
import { rootSaga } from "./rootSaga";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  talleres: talleresReducer,
  listaRincones: rinconesReducer,
  favoritos: favoritosReducer,
});

const appStore = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default appStore;
