import {useDispatch, useSelector} from "react-redux";
import {getAccountsAction} from "./store/accountsReducer";
import {getRoomsAction} from "./store/roomsReducer";

function App() {

    const rooms = useSelector(state => state.roomsReducer.rooms);
    const accounts = useSelector(state => state.accountsReducer.accounts)
    const dispatch = useDispatch()

    return (
        <div className="app">
            <div className="btns">
                <button className="btn" onClick={() => {dispatch(getRoomsAction())}}>ПОЛУЧИТЬ Комнаты-</button>
            </div>
            <div className="btns">
                <button className="btn" onClick={() => {dispatch(getAccountsAction())}}>ПОЛУЧИТЬ Аккаунты</button>
            </div>
            <div className="rooms">
                {
                    rooms.map(room =>
                    <div className="user" key={room.id}>
                        {room.data.price}
                    </div>
                )}
            </div>
            <div className="accounts">
                { accounts?.user1?.password}

            </div>
        </div>
    );
}

export default App;
