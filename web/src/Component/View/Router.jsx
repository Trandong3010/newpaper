import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import News from './News/News';
import Law from './Law/Law';
import World from './World/World';
import Business from './Business/Business';
import Technology from './Technology/Technology';
import Sport from './Sport/Sport';
import Home from './Home/Home';
import NewDetail from './NewDetail/NewDetail';
class Router extends Component {
    render() {
        let data =  this.props.datanew;
        return (
            <div>
                <Switch>
                <Route path="/" name="Home" exact component={Home} />
                    <Route path="/news" name="News" component={News}/>
                    <Route path="/law" name="Law" component={Law} />
                    <Route path="/world" name="World" component={World} />
                    <Route path="/business" name="Business" component={Business} />
                    <Route path="/technology" name="Technology" component={Technology} />
                    <Route path="/sport" name="Sport" component={Sport} />
                    <Route path="/newsdetail" name="newsdetail" component={NewDetail} />
                </Switch>
            </div>
        );
    }
}

export default Router;