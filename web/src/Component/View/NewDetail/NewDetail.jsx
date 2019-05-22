import React, { Component } from 'react';

class NewDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                id: 1,
                title: "Trả 700 triệu cho xe máy bình dân biển đẹp, tay chơi quyết không bán",
                description: "Săn xe máy biển số đẹp đã trở thành đam mê bạc tỷ của nhiều dân chơi ở miền Tây. Và khi đã “nghiện” thì không ai muốn bán xe.",
                images: "https://znews-photo.zadn.vn/w660/Uploaded/lce_jwquc/2019_05_13/tra700trieuchoxemaybinhdantaychoiquyetkhongban.jpg",

            }
        }
    }

    render() {
        var item = this.state.data;
        return (
            <div className="container">
                <div className="row">
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
                </div>
            </div>
        );
    }
}

export default NewDetail;