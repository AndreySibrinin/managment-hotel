import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import "./firebase/firebase"
import {Provider} from "react-redux";
import {store} from "./store/index";
import {BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.min.css'

ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


