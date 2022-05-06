import {put, takeEvery, call} from "redux-saga/effects";
import {get} from "firebase/database";
import {accountsRef} from "../firebase/firebase";
import {GET_ACCOUNTS, getAccountsShowNotificationAction, getAccountsSuccessAction} from "../store/accountsReducer";

const getAccounts = () =>
    get(accountsRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val();
            }
            else {
                return {error: "No data available"};
            }
        })
        .catch((error) => {
            return {error: error};
        });

function* fetchAccountWorker() {
    const data = yield call(getAccounts)

    if (data.error){
        yield put(getAccountsShowNotificationAction(data.error))
    }
    else{
        yield put(getAccountsSuccessAction(data))
    }
}

export function* accountWatcher() {
    yield takeEvery(GET_ACCOUNTS, fetchAccountWorker)
}