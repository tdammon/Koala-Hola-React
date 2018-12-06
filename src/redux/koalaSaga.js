import {put, takeLatest, call} from 'redux-saga/effects'
import axios from 'axios';

// This Saga Gets all Koalas from DB on GET_KOALAS action
function* getKoalas(action) {
    console.log('get koalas', action.payload);
    try {
        const response = yield call(axios.get, '/koala');
        yield put({ type: 'SET_KOALAS', payload: response.data})
    }
    catch (error) {
        console.log('error getting koalas', error)
    }
}

function* koalaSaga() {
    yield takeLatest('GET_KOALAS', getKoalas)
}

export default koalaSaga;