import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            ykien: [],
            datanew: [],
            datalaw: [],
            dataworld: []
        }
    }

    componentDidMount() {

        this.tinmoinhat();
        this.top();
        this.news();
        this.law();
        this.wolds();
    }

    tinmoinhat()
    {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-moi-nhat.rss')
            .then(response => {
                // console.log(response.data);
                this.setState({ data: response.data.items });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    top(){
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fy-kien.rss')
            .then(response => {
                // console.log(response.data);
                this.setState({ ykien: response.data.items });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //Thời sự
    news() {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fthoi-su.rss')
            .then(response => {
                // console.log(response.data);
                this.setState({ datanew: response.data.items });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    // Pháp luật
    law() {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fphap-luat.rss')
            .then(response => {
                // console.log(response.data);
                this.setState({ datalaw: response.data.items });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    wolds() {
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
        let items = this.state.data;
        console.log("dữ liệu",items);
        let ykien = this.state.ykien;
        let news = this.state.datanew;
        let law = this.state.datalaw;
        let wold = this.state.dataworld;
        var left = items.map((value1, key) => {
            if (key < 4) {
                console.log(value1.link);
                return (
                    <NewsItem key={key} classname="row my-3" col1="col-lg-6" col2="col-lg-6"
                        images={value1.thumbnail} title={value1.title} link={value1.link}
                    />
                )
            }
        })

        var mid = ykien.map((value1, key) => {
            if (key > 8) {
                return (
                    <NewsItem key={key} classname="row my-3" col1="col-lg-12" col2="col-lg-12"
                        images={value1.thumbnail} title={value1.title} link={value1.link}
                    />
                )
            }
        })

        var right = items.map((value1, key) => {
            if (key > 7) {
                return (
                    <NewsItem key={key} classname="row my-3" col1="col-lg-12" col2="col-lg-12"
                        images={value1.thumbnail} title={value1.title} link={value1.link}
                    />
                )
            }
        })

        var news1 = news.map((value1, key) => {
            if (key > 5) {
                return (
                    <NewsItem key={key} classname="col-lg-3" col1="col-lg-12" col2="col-lg-12"
                        images={value1.thumbnail} title={value1.title} link={value1.link}
                    />
                )
            }
        })

        var law1 = law.map((value1, key) => {
            if (key > 5) {
                return (
                    <NewsItem key={key} classname="col-lg-3" col1="col-lg-12" col2="col-lg-12"
                        images={value1.thumbnail} title={value1.title} link={value1.link}
                    />
                )
            }
        })
        var wold1 = wold.map((value1, key) => {
            if (key > 5) {
                return (
                    <NewsItem key={key} classname="col-lg-3" col1="col-lg-12" col2="col-lg-12"
                        images={value1.thumbnail} title={value1.title} link={value1.link}
                    />
                )
            }
        })
        return (
            <div className="container">
                <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="card-body">
                        <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators3" data-slide-to={0} className="active" />
                                <li data-target="#carouselExampleIndicators3" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators3" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="https://znews-photo.zadn.vn/w860/Uploaded/fcivbqmv/2019_05_20/huawei20727372.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://znews-photo.zadn.vn/w660/Uploaded/lce_jwquc/2019_02_25/Mate_X_14_4.jpg" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://znews-photo.zadn.vn/w660/Uploaded/pqmcbzwv/2019_05_21/factsaboutappleinc.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-6">
                    <div class="container">
                        <div className="row">
                            <div className="col-lg-4">
                                {
                                    left
                                }
                            </div>
                            <div className="col-lg-5">
                                {/* <NewsItem classname="row my-3" col1="col-lg-12" col2="col-lg-12" images="https://znews-photo.zadn.vn/w480/Uploaded/yfsgs/2019_05_12/NQH09609_thumb.jpg" title="Thủ tướng cùng gần 3.000 đại biểu dự đại lễ Phật đản - Vesak 2019" name="Sáng 12/5, Thủ tướng Nguyễn Xuân Phúc có bài phát biểu tại đại lễ Vesak 2019. Sự kiện lần thứ 3 tổ chức tại Việt Nam quy tụ gần 3.000 đại biểu các nước." /> */}
                                {mid}
                            </div>
                            <div className="col-lg-3">
                                {/* <NewsItem classname="row my-3" col1="col-lg-12" col2="col-lg-12" images="https://znews-photo.zadn.vn/w480/Uploaded/ovhunut/2019_04_05/C003400_03_07_10Still001.jpg" title="Đ'Sau khi đặt vé máy bay, tôi nhận 5-6 tin nhắn mời đi xe sân bay’" /> */}
                                {
                                    right
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <h1>Thời sự</h1>
                        </div>
                        <div className="card-body">
                            <div class="row my-3">
                                {news1}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <h1>Pháp luật</h1>
                        </div>
                        <div className="card-body">
                            <div class="row">
                                {law1}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <h1>Thế giới</h1>
                        </div>
                        <div className="card-body">
                            <div class="row">
                                {wold1}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;