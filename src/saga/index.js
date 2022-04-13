import {all} from "redux-saga/effects"
import {accountWatcher} from "./accountsSaga";
import {roomsWatcher} from "./roomsSaga"

export function* rootWatcher() {
    yield all([accountWatcher(), roomsWatcher()])
}