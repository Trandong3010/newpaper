import React, { Component } from 'react';
import { Modal, Button, Form, Icon, Input, Checkbox, Avatar  } from 'antd';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      size: 'large'
    }
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { loading, size } = this.state;
    return (
      <div>
        <Modal
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.props.handleCancel}
          footer={""}
        >
          <div className="col-lg-12" style={{ paddingTop: '10%' }}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <div>
                <h1 className="LoginTitle">ĐĂNG NHẬP</h1>
              </div>
              <Form.Item>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Tên đăng nhập" />
              </Form.Item>
              <Form.Item>
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Mật khẩu" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button btn">
                  Đăng nhập
              </Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;