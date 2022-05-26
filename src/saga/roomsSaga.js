import {put, takeEvery, call, } from "redux-saga/effects"
import {
    checkSuccessAction,
    CHEK,
    GET_ROOMS,
    getRoomsShowNotificationAction,
    getRoomsSuccessAction,
} from "../store/roomsReducer";
import {equalTo, get, update, orderByChild, query, onValue} from "firebase/database";
import {roomsRef} from "../firebase/firebase";

function* fetchRoomWorker() {
    try{
    const snapshot = yield call(get, roomsRef);
    const data = snapshot.val().map( room =>{
        return {id: room.id, data : room}
    });
        yield put(getRoomsSuccessAction(data))
    }
    catch (error) {
        yield put(getRoomsShowNotificationAction(error))
    }
}

function* ChekRoomWorker(action) {
    try {
        const id = action.payload.id;
        const values = action.payload.values
        const neededRoom = yield call(query, roomsRef, orderByChild('id') ,  equalTo(id));
        yield call(onValue, neededRoom,
        (snap)=>{
                    snap.forEach(function(child) {
                    update(child.ref, values);
                })
        }, { onlyOnce: true });
        yield put(checkSuccessAction({id, values}))
    }
    catch (error) {
        console.log(error);
        yield put(getRoomsShowNotificationAction(error))
    }
}
export function* roomsWatcher() {
    yield takeEvery(GET_ROOMS, fetchRoomWorker);
    yield takeEvery(CHEK, ChekRoomWorker)

}