import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from '../NewsItem/NewsItem';
class World extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataworld: []
        }
    }

    componentDidMount(){
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fthe-gioi.rss')
            .then(response => {
                // console.log(response.data);
                this.setState({ dataworld: response.data.items });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        let items = this.state.dataworld;
        console.log(items)
        var  world = items.map((value1, key) => {
            return (
                <NewsItem key={key} classname="row" col1="col-lg-12" col2="col-lg-12"
                    images={value1.thumbnail} title={value1.title}
                />
            )
        })
        return (
            <div className="container">
            <div className="col-lg-12 col-md-6 col-sm-6">
                <div className="card">
                    <div className="card-header">
                        <h1>Thế giới</h1>
                    </div>
                    <div className="card-body">
                        <div class="row">
                            <div className="col-lg-3">
                                {
                                   world
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default World;