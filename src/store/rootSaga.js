import { all, fork} from 'redux-saga/effects';
import { obenerListaDeRincones } from '../redux/rincones/sagas';
import { obenerListaDeTalleres } from '../redux/talleres/sagas';

export function* rootSaga(){
   yield all([
    obenerListaDeTalleres(),
    obenerListaDeRincones()
   ])
}