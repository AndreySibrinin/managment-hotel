import React, { useState} from 'react';
import {Modal, Button, DatePicker, Form} from 'antd';
import Input from "antd/es/input/Input";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {checkAction} from "../store/roomsReducer";
import moment from "moment";

const CheckInModal = ({room}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        const guest = form.getFieldValue("guest");
        const checkOutDate =form.getFieldValue("date")?.format('YYYY-MM-DD');
        const id = room.id;

        const values = {
            checkInDate:  moment().format('YYYY-MM-DD'),
            isCheckedIn: true,
            guest,
        };
        const data ={id, values, checkOutDate}

        dispatch(checkAction(data));
        form.resetFields();

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    function onChange(date, dateString) {
        console.log(dateString)
    }
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Button type="primary" onClick={showModal} disabled={room.isCheckedIn}>
               Check In
            </Button>
            <Modal title="Check In" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                   footer={[
                       <Button key="cancel" onClick={handleCancel}>
                           Cancel
                       </Button>,
                       <Button key="checkIn" type="primary" onClick={handleOk}>
                           Check in
                       </Button>,
                   ]}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                    autoComplete="off"
                    layout="vertical"

                >
                    <Form.Item
                        name="guest"
                        label="Please, enter the guest's name:"
                        required={true}
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Guest's Name" prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item
                        name="date"
                    label="Please, enter the approximate date of guest checkout:">
                        <DatePicker onChange={onChange} format="YYYY-MM-DD" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default CheckInModal;