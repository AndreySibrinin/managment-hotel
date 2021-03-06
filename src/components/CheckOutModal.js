import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {useDispatch} from "react-redux";
import {checkAction} from "../store/roomsReducer";

const CheckOutModal = ({room}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        const values = {
            checkInDate:  null,
            isCheckedIn: false,
            guest: '',
        };
        const id = room.id;
        const data ={id, values}

        dispatch(checkAction(data))

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} disabled={!room.checkInDate}>
                Check Out
            </Button>
            <Modal title="Check Out" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                   footer={[
                       <Button key="cancel" onClick={handleCancel}>
                           Cancel
                       </Button>,
                       <Button key="confirm" type="primary" onClick={handleOk}>
                           Confirm
                       </Button>,
                   ]}>
                <p>Do you confirm the check out room {room.number}?</p>
            </Modal>
        </>
    );
};

export default CheckOutModal;