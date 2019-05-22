import React, { Component } from 'react';
import Navbar from './Navbar';
import Router from './Router';
import NavBarTop from './NavBarTop';
import Footer from './Footer';
import axios from 'axios';
class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datanew: [],
            datalaw: [],
            dataworld: [],
            databusiness: [],
            datatechnology: [],
            datasport: [],
        }
    }

    

    // law(){
    //     axios.get('https://feed2json.org/convert?url=https%3A%2F%2Fvnexpress.net%2Frss%2Fphap-luat.rss')
    //         .then(response => {
    //             // console.log(response.data);
    //             this.setState({ datalaw: response.data.items });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }

    // world(){
    //     axios.get('https://feed2json.org/convert?url=https%3A%2F%2Fvnexpress.net%2Frss%2Fthe-gioi.rss')
    //         .then(response => {
    //             // console.log(response.data);
    //             this.setState({ dataworld: response.data.items });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }

    // business(){
    //     axios.get('https://feed2json.org/convert?url=https%3A%2F%2Fvnexpress.net%2Frss%2Fkinh-doanh.rss')
    //         .then(response => {
    //             // console.log(response.data);
    //             this.setState({ databusiness: response.data.items });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }

    // technology(){
    //     axios.get('https://feed2json.org/convert?url=https%3A%2F%2Fvnexpress.net%2Frss%2Fkhoa-hoc.rss')
    //         .then(response => {
    //             // console.log(response.data);
    //             this.setState({ datatechnology: response.data.items });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }
    // sport(){
    //     axios.get('https://feed2json.org/convert?url=https%3A%2F%2Fvnexpress.net%2Frss%2Fthe-thao.rss')
    //         .then(response => {
    //             // console.log(response.data);
    //             this.setState({ datasport: response.data.items });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }

    render() {
        return (
            <div className="container">

                <div id="header">
                    <div class="container">
                        <NavBarTop />

                        <Navbar />
                    </div>
                </div>

                <div >
                    <Router
                         datanew = {this.state.datanew}
                         datalaw = {this.state.datalaw}
                         dataworld = {this.state.dataworld}
                         databusiness =  {this.state.databusiness}
                         datatechnology = {this.state.datatechnology}
                         datasport = {this.state.datasport}
                    />
                </div>

                <Footer/>
            </div>

        );
    }
}

export default Index;