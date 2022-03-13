import {fork, take, takeEvery, call, put, select } from "redux-saga/effects";
import {register, registerSuccess, registerFailed } from "../slice";
import registerService from '../../../services/auth/registration';
import {toast} from "react-toastify";

function* watchRegisterFlow () {
    // @ts-ignore
    const action = yield take(register.type);
    try {
        // @ts-ignore
        console.log(action.payload);
        // @ts-ignore
        const response = yield call(registerService, action.payload);
        delete action.payload.password;
        yield put(registerSuccess(action.payload));
        if (response.status === 200 ) {
            toast.success('Successfully registered!', {
                position: 'bottom-center'
            });
            window.location.href = "/login";
        }
        // @ts-ignore
        const state = yield select((state) => state);
        console.log('state after logging in', state);
    }
    catch(e) {
        yield put(registerFailed);
        toast.error('something wrong', {
            position: 'bottom-center'
        });
    }
}
export default function* registerSaga () {
    yield fork(watchRegisterFlow);
}