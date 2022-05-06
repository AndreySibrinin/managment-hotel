import {useEffect} from "react";
import {Link} from "react-router-dom";
import {openNotification} from "../notification";
import {useSelector} from "react-redux";

const RoomsTablePage = () => {


    const getUser = (object, search) => {
        for (const objectKey in object) {
            if(object[objectKey].email === search){
                return object[objectKey];
            }
        }
        return null;
    }
    return (

       <>
           <Link to="/login" > tetse</Link>
       </>
    )
};

export default RoomsTablePage;
