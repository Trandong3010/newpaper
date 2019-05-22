import React, { Component } from 'react';
import PageHeader from '../../Common/PageHeader';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import LoadingScreen from 'react-loading-screen'
class Role extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        
        this.LoadingData();
    }

    LoadingData() {
        fetch('http://localhost:8089/Api/Test/GetList')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        loading: false,
                        data: result
                    });
                },
                (error) => {
                    this.setState({
                        loading: true,
                        error
                    });
                }
            )
    }

    render() {
        var { data, loading } = this.state;
        const columns = [{
            title: 'Tên đăng nhập',
            dataIndex: 'Username',
            width: 200,
        }, {
            title: 'Mật khẩu',
            dataIndex: 'Password',
            width: 300,
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <a href="javascript:;">Delete</a>
            ),
        },
        ];
        return (
            <div>
                
                setTimeout(() => {
            <LoadingScreen
            loading= "true"
            bgColor='#f1f1f1'
            spinnerColor='#9ee5f8'
            textColor='#676767' />
        }, 50);
                <PageHeader linkql="#" nameql="Quản lý hệ thống" link="/Role" name="Quản lý nhóm trò" />
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-primary btn-round ml-auto" data-toggle="modal" data-target="#addRowModal">
                                        <i className="fa fa-plus" />
                                        Thêm
                </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <Table
                                    bordered
                                    columns={columns}
                                    dataSource={data}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Role;