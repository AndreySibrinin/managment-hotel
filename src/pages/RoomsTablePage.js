import {useState} from "react";
import {Row, Col, Button, Space, Checkbox} from 'antd';
import {useSelector} from "react-redux";
import {Table} from "antd";
import {useNavigate} from "react-router";
const RoomsTablePage = () => {

    const navigate = useNavigate();
    const rooms = useSelector(state => state.roomsReducer.rooms);
    const dataSource = rooms?.map(item =>({...item.data, key: item.id}));
    const [filteredInfo, setFilteredInfo] = useState({type:["standard", "suite"], occupancy: [3,4]});
    const [checked, setChecked] = useState(false);


    const onChangeCheckBox = e => {
        setChecked(e.target.checked);
        if(e.target.checked){
            setFilteredInfo({...filteredInfo, guest: ["only vacant rooms"]});
        }
        else{
            setFilteredInfo({...filteredInfo, guest: null});
        }
    };


    const handleChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
    };

    const clearFilters = () => {
        setFilteredInfo({});
        setChecked(false);
    };

    const columns = [
        {
            title: 'Number',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',

            filters: [
                {
                    text: 'standard',
                    value: 'standard',
                },
                {
                    text: 'suite',
                    value: 'suite',
                },
                {
                    text: 'deluxe',
                    value: 'deluxe',
                },
            ],
            onFilter:(value, item)=>item.type.includes(value),
            filteredValue: filteredInfo.type || null,
        },
        {
            title: 'Occupancy',
            dataIndex: 'occupancy',
            key: 'occupancy',
            filters: [
                {
                    text: '2',
                    value: 2,
                },
                {
                    text: '3',
                    value: 3,
                },
                {
                    text: '4',
                    value: 4,
                },
            ],
            onFilter:(value, item)=> (item.occupancy === value),
            filteredValue: filteredInfo.occupancy || null,

        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: (a,b) => a.price - b.price,
            defaultSortOrder: "ascend",
        },
        {
            title: 'Guest',
            dataIndex: 'guest',
            key: 'guest',
            filters: [
                {
                    text: 'only vacant rooms',
                    value: 'only vacant rooms',
                },
                {
                    text: 'all rooms',
                    value: 'all rooms',
                },
            ],
            onFilter: (value, record) => value === 'only vacant rooms'? record.guest === '' :  true,
            filteredValue: filteredInfo.guest || null,
        },
        {
            title: '?',
            dataIndex: 'id',
            key: 'id',
            render: key => <Button onClick={ () => navigate(`/rooms/${key}`)} type="primary">More Information</Button>,
        },
    ];
        return (
            <>
                <Row>
                    <Col span={22} offset = {1}>
                        <Space style={{ marginBottom: 16, marginTop: 16 }}>
                            <Button type="primary" onClick={clearFilters}>Clear all filters</Button>
                            <Checkbox checked={checked}  onChange={onChangeCheckBox}>
                               Free rooms only
                            </Checkbox>
                        </Space>
                        <Table columns={columns} dataSource={dataSource} onChange={handleChange} />
                    </Col>
                </Row>
            </>

        );
    }


export default RoomsTablePage;