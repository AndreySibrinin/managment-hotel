import {all} from "redux-saga/effects"
import {accountWatcher} from "./accountsSaga";
import {roomsWatcher} from "./roomsSaga"
import {usersWatcher} from "./usersSaga";

export function* rootWatcher() {
    yield all([accountWatcher(), roomsWatcher(), usersWatcher()])
}