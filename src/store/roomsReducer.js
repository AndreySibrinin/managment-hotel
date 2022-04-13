export const GET_ROOMS = "GET_ROOMS";
export const GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS";
export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";

const defaultState = {
    rooms: []
}

export default function roomsReducer(state = defaultState, action) {
    switch(action.type) {
        case GET_ROOMS_SUCCESS:
            return {...state, rooms: action.payload}
        case SHOW_NOTIFICATION:
            return {...state, rooms: action.payload}
        default: return state;
    }
}

export const getRoomsSuccessAction = payload => ({type: GET_ROOMS_SUCCESS, payload})
export const getRoomsAction = () => ({type: GET_ROOMS})
export const getRoomsShowNotificationAction = payload => ({type: SHOW_NOTIFICATION, payload})