import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Button, Carousel, Checkbox, Col, Descriptions, Image, List, Row, Space} from "antd";
import {CheckOutlined, HomeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router";


const SingleRoomPage = () => {
    const navigate = useNavigate();

    const {id} = useParams();
    const rooms = useSelector(state => state.roomsReducer.rooms);
    const currentRoom = rooms.find(room => room.id === id ).data;
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <>
            <Row>
                <Col offset={1} span={22}>
                    <Space style={{ marginBottom: 16, marginTop: 16 }}>
                        <Button onClick={()=> navigate("/")} style={{color: "#1890ff"}} type="text"> <HomeOutlined /> Back Home</Button>
                    </Space>
                </Col>
            </Row>

            <Row>
                <Col span={11} offset = {1}>
                    <Carousel autoplay>
                        {currentRoom.gallery.map(image =>(
                            <div>
                                <Image
                                    width="100%"
                                    height={400}
                                    src={image}
                                />
                            </div>
                        ))
                        }
                    </Carousel>
                </Col>
                <Col span={11}>
                    <Row>
                        <Col span={12}>
                            <h1 style={{ paddingLeft:"15px", textDecoration: "underline", fontSize: "2.0em", fontWeight:"900"}} >{"Room " + currentRoom.number}</h1>
                        </Col>

                        <Col align="end" span={12}>
                            <Space >
                                <Button>Check In</Button>
                                <Button>Check Out</Button>
                            </Space>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={11}>
                            <Descriptions column={1} style={{ paddingLeft:"15px"}}>
                                <Descriptions.Item label="Type">{currentRoom.type}</Descriptions.Item>
                                <Descriptions.Item label="Occupancy">{currentRoom.occupancy}</Descriptions.Item>
                                <Descriptions.Item label="Price">{currentRoom.price}</Descriptions.Item>
                                <Descriptions.Item label="Guest">{currentRoom.guest}</Descriptions.Item>
                            </Descriptions>
                        </Col>
                        <Col span={13}>
                            <List
                                header={<b>Features:</b>}
                                dataSource={currentRoom.features}
                                renderItem={item => (
                                    <List.Item style={{padding:"0px" }}>
                                        <CheckOutlined /> {item}
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{
                paddingTop: "100px"
            }
            }>
                <Col offset={1} span={21}>

                    <Descriptions>
                        <Descriptions.Item label={<b>Description</b>}>{currentRoom.description}</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
        </>
    );
};

export default SingleRoomPage;