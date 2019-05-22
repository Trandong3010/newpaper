import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-6 col-lg-6">
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="menu-active">
                        <NavLink to="/"> <span className="sub-item">Trang chủ</span></NavLink>
                        </li>
                        <li>
                        <NavLink to="/news"> <span className="sub-item">Thời sự</span></NavLink>
                        </li>
                        <li>
                        <NavLink to="/law"> <span className="sub-item">Pháp luật</span></NavLink>
                        </li>
                        <li>
                        <NavLink to="/world"> <span className="sub-item">Thế giới</span></NavLink>
                        </li>
                        <li>
                        <NavLink to="/business"> <span className="sub-item">Kinh doanh</span></NavLink>
                        </li>
                        <li>
                        <NavLink to="/technology"> <span className="sub-item">Công nghệ</span></NavLink>
                        </li>
                        <li>
                        <NavLink to="/sport"> <span className="sub-item">Thể thao</span></NavLink>
                        </li>
                    </ul>
                </nav>
                
            </div>
        );
    }
}

export default Navbar;