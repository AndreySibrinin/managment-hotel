import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";


const ProtectedRoutes = () => {
    const isAuth = useSelector((state) => state.usersReducer.isAuth);
    return isAuth ? <Outlet /> : <Navigate to="/login" replace="true"/>;
};

export default ProtectedRoutes;