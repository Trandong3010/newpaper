import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from '../NewsItem/NewsItem';
class Law extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datalaw: []
        }
    }

    componentDidMount() {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fphap-luat.rss')
            .then(response => {
                // console.log(response.data);
                this.setState({ datalaw: response.data.items });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        let items = this.state.datalaw;
        console.log(items)
        var laws = items.map((value1, key) => {
            return (
                <NewsItem key={key} classname="col-lg-3" col1="col-lg-12" col2="col-lg-12"
                    images={value1.thumbnail} title={value1.title}
                />
            )
        })
        return (
            <div className="container" style={{ paddingTop: "120px" }}>
                <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <h1>Thời sự</h1>
                        </div>
                        <div className="card-body">
                            <div class="row">
                                {
                                    laws
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Law;