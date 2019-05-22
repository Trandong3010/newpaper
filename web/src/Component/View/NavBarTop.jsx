import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Login from './Login/Login';
class NavBarTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginShow: false
        };
    }

    showModal = () => {
        debugger
        this.setState({
            loginShow: true,
        });
      }


    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          loginShow: false,
        });
      }
    
    render() {
        return (
            <div className="col-lg-12 col-md-6 col-lg-6">
                <nav className="navbar navbar-light justify-content-between">
                    <div id="logo" className="pull-left">
                        <a href=""><img src="assets/img/logo.png" alt title /></a>
                    </div>
                    <div className="collapse" id="search-nav">
                        <form className="navbar-left navbar-form nav-search mr-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button type="submit" className="btn btn-search pr-1">
                                        <i className="fa fa-search search-icon" />
                                    </button>
                                </div>
                                <input type="text" placeholder="Search ..." className="form-control" />
                            </div>
                        </form>
                    </div>
                    <div id="avater">
                        <ul class="nav-menu">
                            <li>
                                <div className="avatar-sm float-left mr-2">
                                    <img src="https://github.com/Trandong3010/newpaper/blob/master/web/public/assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                                </div>
                                <a href="#" onClick={this.showModal}><span className="sub-item">Đăng nhập</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Login visible={this.state.loginShow} handleCancel={this.handleCancel}/>
            </div>
        );
    }
}

export default NavBarTop;
