import {put, call, takeLatest} from "redux-saga/effects"
import {logErrorAction, LOGIN, loginSuccessAction, LOGOUT, logoutSuccessAction} from "../store/usersReducer";
import {auth} from "../firebase/firebase";
import {signInWithEmailAndPassword, signOut} from "firebase/auth";

function* userLogIn(action){
    try{

       const userData = action.payload.userData;
       const result = yield call(signInWithEmailAndPassword, auth, userData.email, userData.password);
       yield put(loginSuccessAction(result.user.email));
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
        action.payload.navigate("/login");
    }
    catch (error){
        yield put(logErrorAction(error.message));
    }

}




export function* usersWatcher() {
    yield takeLatest(LOGIN, userLogIn);
    yield takeLatest(LOGOUT, userLogOut);
}