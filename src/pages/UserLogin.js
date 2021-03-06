
import {Form, Input, Button} from 'antd';
import { Row, Col, Layout } from 'antd';
import { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../store/usersReducer";
import {useNavigate} from "react-router";
import {openNotification} from "../notification";
import {getAccountsAction} from "../store/accountsReducer";
import Checkbox from "antd/es/checkbox/Checkbox";

const {  Content } = Layout;

const UserLogin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errorLogIn = useSelector(state => state.usersReducer.errorMessage);

    useEffect(() =>{
        dispatch(getAccountsAction());
        if(localStorage.authData !== undefined){
            dispatch(loginAction({navigate, userData: JSON.parse(localStorage.authData)}));
        }
    },[]);

    useEffect(() => {
        if(errorLogIn !== null){
         openNotification('error', 'top', `Error LogIn`, "Invalid username or password");
        }
    },[errorLogIn]);


    const onFinish = (values) => {
       dispatch(loginAction({navigate, userData: values}));
    };

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo);
    };

    return (

        <Layout>
            <Content style={{height:"100vh"}}>
                <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
                    <Col span={8} style={{backgroundColor: "white", padding: "20px"}}>
                       <h3>Authentication</h3>
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 4,
                                    }}
                                    wrapperCol={{
                                        span: 20,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        labelAlign="left"
                                        name="email"
                                        label="   Email"
                                        rules={[
                                            {
                                                type: "email",
                                                required: true,
                                                message: 'Please input your email!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        labelAlign="left"
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },

                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item name="remember" valuePropName="checked" >
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <Form.Item
                                        wrapperCol={{
                                            offset: 10,
                                            span: 14,
                                        }}
                                    >
                                        <Button type="primary" htmlType="submit" style={{width:"150px"}}>
                                            Log in
                                        </Button>
                                    </Form.Item>

                                </Form>
                            </Col>
                </Row>
            </Content>
        </Layout>

    );
};

export default UserLogin;