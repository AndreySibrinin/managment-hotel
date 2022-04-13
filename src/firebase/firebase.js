import { initializeApp } from "firebase/app";
import {getDatabase, ref, child} from "firebase/database"
import {firebaseConfig} from "./config";

const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app)
const databaseRef = ref(dataBase);

export const roomsRef = child(databaseRef, 'Rooms');
export const accountsRef = child(databaseRef,'Accounts');

