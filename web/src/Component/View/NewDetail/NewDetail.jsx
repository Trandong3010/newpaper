import React, { Component } from 'react';
import axios from 'axios';
class NewDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        debugger
        axios.get('http://localhost:5000/getdata01')
          .then(response => {
            console.log(response.data);
            this.setState({ items: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }

    render() {
        var item = this.state.items;
        console.log(item);
        return (
            <div className="container">
                {/* <div className="row">
                    <div className="col-lg-12">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="col-lg-12">
                        <img src={item.images} width="100%" alt="" />
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h1>{item.title}</h1>
                            </div>
                            <img className="card-img-top" src={item.images} alt />
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default NewDetail;