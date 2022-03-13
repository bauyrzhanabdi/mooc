import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import {setData, getData} from "./data/slice";
import axios from 'axios'
import authSaga from "./auth/login/sagas";
import registerSaga from "./auth/signUp/sagas";
import sagaWatcher from './data/sagas';
import userSaga from "./user/sagas";
export default function* rootSaga () {
    yield all([
        sagaWatcher(),
        authSaga(),
        registerSaga(),
        userSaga()
    ]);
}