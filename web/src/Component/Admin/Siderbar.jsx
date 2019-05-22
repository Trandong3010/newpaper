import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
class Siderbar extends Component {
    render() {
        return (
            <div className="sidebar sidebar-style-2">
                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                    <div className="sidebar-content">
                        <div className="user">
                            <div className="avatar-sm float-left mr-2">
                                <img src="../assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                            </div>
                            <div className="info">
                                <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                    <span>
                                        Hizrian
                        <span className="user-level">Administrator</span>
                                        <span className="caret" />
                                    </span>
                                </a>
                                <div className="clearfix" />
                                <div className="collapse in" id="collapseExample">
                                    <ul className="nav">
                                        <li>
                                            <a href="#profile">
                                                <span className="link-collapse">My Profile</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#edit">
                                                <span className="link-collapse">Edit Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#settings">
                                                <span className="link-collapse">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul className="nav nav-primary">
                            <li className="nav-item active">
                                <a data-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                                    <i className="fas fa-home" />
                                    <p>Trang chủ</p>
                                </a>
                            </li>
                            <li className="nav-section">
                                <span className="sidebar-mini-icon">
                                    <i className="fa fa-ellipsis-h" />
                                </span>
                                <h4 className="text-section">Quản lý</h4>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#base">
                                    <i className="fas fa-layer-group" />
                                    <p>Quản trị hệ thống</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="base">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <NavLink to="/Account"> <span className="sub-item">Tài khoản</span></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/Role"> <span className="sub-item">Vai trò</span></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/Permision"> <span className="sub-item">Quyền</span></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#sidebarLayouts">
                                    <i className="fas fa-th-list" />
                                    <p>Sản phẩm</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="sidebarLayouts">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="sidebar-style-1.html">
                                                <span className="sub-item">Danh mục sản phẩm</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="overlay-sidebar.html">
                                                <span className="sub-item">Hàng hóa</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="compact-sidebar.html">
                                                <span className="sub-item">Compact Sidebar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="static-sidebar.html">
                                                <span className="sub-item">Static Sidebar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="icon-menu.html">
                                                <span className="sub-item">Icon Menu</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#forms">
                                    <i className="fas fa-pen-square" />
                                    <p>Forms</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="forms">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="forms/forms.html">
                                                <span className="sub-item">Basic Form</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#tables">
                                    <i className="fas fa-table" />
                                    <p>Tables</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="tables">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="tables/tables.html">
                                                <span className="sub-item">Basic Table</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables/datatables.html">
                                                <span className="sub-item">Datatables</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#maps">
                                    <i className="fas fa-map-marker-alt" />
                                    <p>Maps</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="maps">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="maps/jqvmap.html">
                                                <span className="sub-item">JQVMap</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#charts">
                                    <i className="far fa-chart-bar" />
                                    <p>Charts</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="charts">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="charts/charts.html">
                                                <span className="sub-item">Chart Js</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="charts/sparkline.html">
                                                <span className="sub-item">Sparkline</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Siderbar;