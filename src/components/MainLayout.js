import {Link, Outlet} from 'react-router-dom'
import {Col, Layout, Row} from "antd";
import {StarFilled} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import {Content, Header} from "antd/es/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import {logoutAction} from "../store/usersReducer";
import {useEffect} from "react";
import {openNotification} from "../notification";
const MainLayout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errorMessage = useSelector(state => state.usersReducer.errorMessage);

    useEffect(()=>{
        if(errorMessage !== null){
            openNotification('error', 'top', errorMessage);
        }
    });

  const handleClickLogOut = () => {
       dispatch(logoutAction({navigate}));
    }
    return (
        <Layout>
            {

            }
            <Header style={{height: "80px"}}>
                <Row>
                    <Col style={{height: "80px"}} flex="auto">

                        <div style={{
                            position: "relative",
                            color: "white",
                            fontSize: "2rem",
                            textDecoration: "underline"
                        }}>Hotel
                        </div>

                        <StarFilled style={{position: "relative", top: "-40px", color: "white", marginRight: "5px"}}/>
                        <StarFilled style={{position: "relative", top: "-40px", color: "white", marginRight: "5px"}}/>
                        <StarFilled style={{position: "relative", top: "-40px", color: "white", marginRight: "5px"}}/>
                        <StarFilled style={{position: "relative", top: "-40px", color: "white", marginRight: "5px"}}/>


                    </Col>
                    <Col flex="150px">
                        <Row>
                            <Col span={12}>
                                <Avatar style={{marginTop: 8}} size={64}
                                        src="https://firebasestorage.googleapis.com/v0/b/hotel-da9e2.appspot.com/o/avatar-373-456325-512.png?alt=media&token=bf97a9bc-d3ff-44d8-8149-7516efad5039"/>
                            </Col>
                            <Col span={12}>
                                <div style={{ marginTop: 8, float: "right", color: "white"}}>
                                    <Link style={{color: "white"}} to="#" onClick={handleClickLogOut} >Log Out</Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
            <Content style={{height: "100vh"}}>
                <Outlet/>
            </Content>
        </Layout>
    );

};

export  default MainLayout;