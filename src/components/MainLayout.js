import {Outlet} from 'react-router-dom'
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {openNotification} from "../notification";
import HeaderLayout from "./HeaderLayout";
const MainLayout = () => {

    const errorMessage = useSelector(state => state.usersReducer.errorMessage);

    useEffect(()=>{
        if(errorMessage !== null){
            openNotification('error', 'top', errorMessage);
        }
    });

    return (
        <Layout style={{height: "100vh"}}>
            <HeaderLayout/>
            <Content>
                <Outlet/>
            </Content>
        </Layout>
    );

};

export  default MainLayout;