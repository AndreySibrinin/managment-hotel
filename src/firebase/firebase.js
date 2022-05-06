import { initializeApp } from "firebase/app";
import {getDatabase, ref, child} from "firebase/database"
import { getAuth } from "firebase/auth";
import {firebaseConfig} from "./config";

const app = initializeApp(firebaseConfig);

const dataBase = getDatabase(app)
const databaseRef = ref(dataBase);
export const roomsRef = child(databaseRef, 'Rooms');
export const accountsRef = child(databaseRef,'Accounts');

export const auth = getAuth(app);