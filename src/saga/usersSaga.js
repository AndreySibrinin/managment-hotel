import {put, call, takeLatest, takeEvery} from "redux-saga/effects"
import {logErrorAction, LOGIN, loginSuccessAction, LOGOUT, logoutSuccessAction} from "../store/usersReducer";
import {auth} from "../firebase/firebase";
import {signInWithEmailAndPassword, signOut} from "firebase/auth";

function* userLogIn(action){
    try{
       const userData = action.payload.userData;
       const result = yield call(signInWithEmailAndPassword, auth, userData.email, userData.password);
       yield put(loginSuccessAction(result.user.email));
       if(userData.remember)
           yield call ([localStorage, 'setItem'], 'authData', JSON.stringify({email:userData.email, password: userData.password}));
       action.payload.navigate("/");
    }
    catch (error){
        yield put(logErrorAction(error.message ));
    }

}

function* userLogOut(action){
    try {
        yield call(signOut, auth);
        yield put(logoutSuccessAction());
        yield call ([localStorage, 'removeItem'], "authData");
        action.payload.navigate("/login");
    }
    catch (error){
        yield put(logErrorAction(error.message));
    }

}




export function* usersWatcher() {
    yield takeEvery(LOGIN, userLogIn);
    yield takeEvery(LOGOUT, userLogOut);
}