import React, { Component } from 'react';
import Header from './Header';
import Siderbar from './Siderbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Account from './Users/Account';
import Role from './Users/Role';
import Permision from './Users/Permision';
import Dashboard from './Home/Dashboard';
class Index extends Component {
    render() {
        return (
            <div div className="wrapper">
                <Header />
                <Siderbar />
                <div className="main-panel">
                    <div className="content">
                        <div className="page-inner">
                            <Switch>
                                <Route  path="/dashboard" name="Dashboard" component={Dashboard} />
                                <Route  path="/account" name="Account" component={Account} />
                                <Route path="/role" name="Role" component={Role} />
                                <Route path="/Permision" name="Permision" component={Permision} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;