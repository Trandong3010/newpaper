import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen'
import PageHeader from '../../Common/PageHeader';
import { Table } from 'antd';
import 'antd/dist/antd.css';
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 1000)
        this.LoadingData();
    }

    LoadingData() {
        fetch('http://localhost:8089/Api/Test/GetList')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        data: result
                    });
                }
                // ,
                // (error) => {
                //     this.setState({
                //         loading: true,
                //         error
                //     });
                // }
            )
    }

    render() {
        var { data, loading } = this.state;
        const columns = [{
            title: 'Tên đăng nhập',
            dataIndex: 'Username',
            width: "40%",
        }, {
            title: 'Mật khẩu',
            dataIndex: 'Password',
            width: "40%",
        },
        {
            title: 'Action',
            key: 'action',
            width: "20%",
            render: () => (
                <div className="form-button-action">
                {/* <a href="javascript:;">Delete</a> */}
                    <button type="button" data-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                        <i className="fa fa-edit" />
                    </button>
                    <button type="button" data-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                        <i className="fa fa-times" />
                    </button>
                </div>
            ),
        },
        ];
        return (
            <div>
                <LoadingScreen
                    loading={loading}
                    bgColor='#f1f1f1'
                    spinnerColor='#9ee5f8'
                    textColor='#676767' />
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

export default Account;