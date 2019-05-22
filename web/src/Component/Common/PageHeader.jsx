import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
class PageHeader extends Component {
    render() {
        return (
            <div className="page-header">
                <ul className="breadcrumbs">
                    <li className="nav-home">
                        <a href="#">
                            <i className="flaticon-home" />
                        </a>
                    </li>
                    <li className="separator">
                        <i className="flaticon-right-arrow" />
                    </li>
                    <li className="nav-item">
                        <NavLink to={this.props.linkql}> {this.props.nameql}</NavLink>
                    </li>
                    <li className="separator">
                        <i className="flaticon-right-arrow" />
                    </li>
                    <li className="nav-item">
                        <NavLink to={this.props.link}> {this.props.name}</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PageHeader;