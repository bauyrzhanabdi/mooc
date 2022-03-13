import axios from "axios";
import {call, put, takeLatest} from "redux-saga/effects";
import {getUser, setUser} from "./slice";
import userService from "../../services/user";

function* userSagaWorker () : any {
    try {
        const res = yield call(userService);
        const { data } = res;
        yield put(setUser({...data}));
        console.log(res)
    }
    catch(e) {
        console.log(e);
    }
}


export default function* userSaga () : any {
    yield takeLatest(getUser.type, userSagaWorker);
}