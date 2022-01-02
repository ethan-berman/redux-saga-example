import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import appReducer from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware()
export const store = createStore(
    appReducer,
    compose(
        applyMiddleware(sagaMiddleWare),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
);
sagaMiddleWare.run(rootSaga);


