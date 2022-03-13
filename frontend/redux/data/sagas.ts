import axios from "axios";
import {call, put, takeLatest} from "redux-saga/effects";
import {getData, setData} from "./slice";

async function getDataApi () {
    const response = await axios.get('https://swapi.dev/api/people/1/');
    return response;
}

function* sagaWorker () : any {
    try {
        const res = yield call(getDataApi);
        const { data } = res;
        yield put(setData({...data}));
        console.log(res)
    }
    catch(e) {
        console.log(e);
    }
}


export default function* sagaWatcher () : any {
    yield takeLatest(getData.type, sagaWorker);
}