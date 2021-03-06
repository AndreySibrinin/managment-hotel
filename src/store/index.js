import {createStore, combineReducers, applyMiddleware} from "redux";
import accountsReducer from "./accountsReducer";
import roomsReducer from "./roomsReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import {composeWithDevTools} from "@redux-devtools/extension";
import usersReducer from "./usersReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    accountsReducer,
    roomsReducer,
    usersReducer,
    });

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);
