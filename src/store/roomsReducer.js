export const GET_ROOMS = "GET_ROOMS";
export const GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS";
export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const CHEK = "CHEK";

export const CHEK_SUCCESS = "CHEK_SUCCESS";


const defaultState = {
    rooms: [],
    error: null,
}

export default function roomsReducer(state = defaultState, action) {
    switch(action.type) {
        case GET_ROOMS_SUCCESS:
            return {...state, rooms: action.payload}
        case CHEK_SUCCESS:
            return {...state, rooms: state.rooms.map((room)=>{
                    if(room.id === action.payload.id){
                        room.data = {...room.data, ...action.payload.values};
                        return room;
                    }
                    else return room;
                })}
        case SHOW_NOTIFICATION:
            return {...state, error: action.payload}
        default: return state;
    }
}

export const getRoomsSuccessAction = payload => ({type: GET_ROOMS_SUCCESS, payload})
export const getRoomsAction = () => ({type: GET_ROOMS})
export const getRoomsShowNotificationAction = payload => ({type: SHOW_NOTIFICATION, payload})
export const checkAction = payload => ({type: CHEK, payload})
export const checkSuccessAction = payload => ({type: CHEK_SUCCESS, payload})