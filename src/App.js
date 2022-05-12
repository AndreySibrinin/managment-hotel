import {Route, Routes} from "react-router";
import UserLogin from "./pages/UserLogin";
import RoomsTablePage from "./pages/RoomsTablePage";
import ProtectedRoutes from "./hoc/ProtectedRoutes";
import MainLayout from "./components/MainLayout";
import SingleRoomPage from "./pages/SingleRoomPage";

function App() {

    return (

    <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route element={<ProtectedRoutes />}>
                        <Route index element={<RoomsTablePage />} />
                        <Route path="rooms/:id" element={<SingleRoomPage/>} />
                    </Route>
                </Route>
                <Route path="/login" element={<UserLogin />} />

    </Routes>



    );


}

export default App;
