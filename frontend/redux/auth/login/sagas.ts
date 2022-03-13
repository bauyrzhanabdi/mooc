import {fork, take, takeEvery, call, put, select } from "redux-saga/effects";
import {login, logout, loginSuccess, loginFailed} from "../slice";
import loginService from '../../../services/auth/login';
import {toast} from "react-toastify";
function* handleLogout () {
    // @ts-ignore
    const state = yield select((state) => state);
    console.log('state after logging out', state);
}
function* watchAuthFlow () : any {
    // login flow
    const action = yield take(login.type);
    try {
        const response = yield call(loginService, action.payload);
        yield put(loginSuccess(response.data));
        if (response.status === 200 ) {
            response.data?.token && localStorage.setItem('token', response.data.token);
            toast.success('Successfully logged in!', {
                position: 'bottom-center'
            });
            window.location.href = "/";
        }

        // view state by effect
        const state = yield select((state) => state);
        console.log('state after logging in', state);
    }
    catch(e) {
        yield put(loginFailed);
        toast.error('something wrong', {
            position: 'bottom-center'
        });
    }

    // logout flow
    yield take(logout.type);
    yield fork(handleLogout);
}
export default function* authSaga () {
    yield fork(watchAuthFlow);
}