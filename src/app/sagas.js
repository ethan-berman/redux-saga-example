import {FETCH_DRINKS, PROCESS_FETCH, START_FETCH, END_FETCH} from "./actionTypes";
import {getAllDrinks} from "./services";
import { put, takeEvery, all, call } from 'redux-saga/effects';

let startFetchFun = () => {
    return {
        type: START_FETCH,
        loading: true
    }
};
let processFetchFun = (data) => {
    return {
        type: PROCESS_FETCH,
        payload: data
    }
};

let endFetchFun = (error) => {
    return {
        type: END_FETCH,
        payload: error
    }
};
export function* helloSaga() {
    yield call(console.log, "hello users");
}
export function* fetchDrinks() {
    try {
        yield put(startFetchFun());
        const results = yield call(getAllDrinks);
        yield call(console.log, results);
        yield put(processFetchFun(results));
    } catch (err) {
        yield put(endFetchFun(err.message));
    }
}

export function* watchCalls(){
    yield takeEvery(FETCH_DRINKS, fetchDrinks);
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchCalls()
    ])
}