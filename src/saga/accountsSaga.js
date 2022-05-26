import {put, takeEvery, call} from "redux-saga/effects";
import {get} from "firebase/database";
import {accountsRef} from "../firebase/firebase";
import {GET_ACCOUNTS, getAccountsShowNotificationAction, getAccountsSuccessAction} from "../store/accountsReducer";

function* fetchAccountWorker() {
    try{
        const snapshot = yield call(get, accountsRef);
        const data = snapshot.val();
        yield put(getAccountsSuccessAction(data))
    }
    catch (error) {
        yield put(getAccountsShowNotificationAction(error))
    }
}

export function* accountWatcher() {
    yield takeEvery(GET_ACCOUNTS, fetchAccountWorker)
}