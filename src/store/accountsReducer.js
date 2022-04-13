export const GET_ACCOUNTS = "getAccounts";
export const GET_ACCOUNTS_SUCCESS = "getAccountsSuccess";
export const SHOW_NOTIFICATION = "ShownNotification";

const defaultState ={
    accounts: {}
}
export default function accountsReducer(state = defaultState, action) {
    switch(action.type) {
        case GET_ACCOUNTS_SUCCESS:
            return {...state, accounts: action.payload}
        case SHOW_NOTIFICATION:
            return {...state, accounts: action.payload}
        default: return state;
    }
}


export const getAccountsAction = () =>({type: GET_ACCOUNTS})
export const getAccountsSuccessAction = payload =>({type: GET_ACCOUNTS_SUCCESS, payload})
export const getAccountsShowNotificationAction = payload =>({type: SHOW_NOTIFICATION, payload})
