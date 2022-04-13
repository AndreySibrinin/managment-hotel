import {put, takeEvery, call} from "redux-saga/effects"
import {GET_ROOMS, getRoomsShowNotificationAction, getRoomsSuccessAction,} from "../store/roomsReducer";
import {get} from "firebase/database";
import {roomsRef} from "../firebase/firebase";

const getRooms = () =>
    get(roomsRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
              return  snapshot.val().map( room =>{
                 return {id: room.id, data : room}
              });
            }
            else {
                return {error: "No data available"};
            }
         })
        .catch((error) => {
            return {error: error};
    });

function* fetchRoomWorker() {
   const data = yield call(getRooms)
    if (data.error){
     yield put(getRoomsShowNotificationAction(data.error))
    }
    else{
        yield put(getRoomsSuccessAction(data))
    }
}

export function* roomsWatcher() {
    yield takeEvery(GET_ROOMS, fetchRoomWorker)
}