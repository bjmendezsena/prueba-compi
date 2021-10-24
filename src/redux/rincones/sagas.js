import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { obtenerTodosLosRincones } from "../../services/service";
import {obtenerListaRinconesFailed,obtenerListaRinconesFinish,obtenerListaRinconesStart} from './actions';

export function* obenerListaDeRincones() {
    yield put(obtenerListaRinconesStart());
  
    const [error, data] = yield call(obtenerTodosLosRincones);
    if (error) {
      yield put(obtenerListaRinconesFailed());
    }
  
    yield put(obtenerListaRinconesFinish(data));
  }
  