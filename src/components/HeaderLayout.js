import React, {useEffect, useState} from 'react';
import {Col, Row} from "antd";
import {StarFilled} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import {Link} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import {logoutAction} from "../store/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {getAvatar} from "../utils";

const HeaderLayout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userEmail = useSelector(state => state.usersReducer.email);
    const accounts = useSelector(state => state.accountsReducer.accounts)
    const [avatar, setAvatar] =  useState(() => getAvatar(accounts, userEmail));


    useEffect(()=>{
       setAvatar(getAvatar(accounts, userEmail));
    },[userEmail, accounts]);

    const handleClickLogOut = () => {
        dispatch(logoutAction({navigate}));
    }

    return (
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
                                    src={avatar}/>
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
    );
};

export default HeaderLayout;