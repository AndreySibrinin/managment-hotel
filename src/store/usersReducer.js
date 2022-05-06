export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOG_ERROR = "LOG_ERROR";


const defaultState = {
        email: null,
        errorMessage: null,
        isAuth: false
}


export default function usersReducer(state = defaultState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {...state, email: action.email, isAuth: true}
        case LOGOUT_SUCCESS:
            return {...state,  email: null, errorMessage: null, isAuth: false}
        case LOG_ERROR:
            return {...state, errorMessage: action.payload}
        default: return state;
    }
}

export const loginAction = payload => ({type: LOGIN, payload})
export const loginSuccessAction = payload => ({type: LOGIN_SUCCESS, payload})
export const logoutSuccessAction = () => ({type: LOGOUT_SUCCESS})
export const logoutAction = payload => ({type: LOGOUT, payload})
export const logErrorAction = payload => ({type: LOG_ERROR, payload})