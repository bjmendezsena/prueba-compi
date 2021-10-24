import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  obtenerListaTalleresStart,
  obtenerListaTalleresFailed,
  obtenerListaTalleresFinish,
} from "./actions";
import { obtenerTodosLosTalleres } from "../../services/service";

export function* obenerListaDeTalleres() {
  yield put(obtenerListaTalleresStart());

  const [error, data] = yield call(obtenerTodosLosTalleres);
  if (error) {
    yield put(obtenerListaTalleresFailed());
  }

  yield put(obtenerListaTalleresFinish(data));
}
