import React, { Component } from 'react';

class Model extends Component {
    render() {
        return (
            <div className="modal fade" id="addRowModal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header no-bd">
                            <h5 className="modal-title">
                                <span className="fw-mediumbold">
                                    New</span>
                                <span className="fw-light">
                                    Row
                        </span>
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="small">Create a new row using this form, make sure you fill them all</p>
                            <form>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group form-group-default">
                                            <label>Name</label>
                                            <input id="addName" type="text" className="form-control" placeholder="fill name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 pr-0">
                                        <div className="form-group form-group-default">
                                            <label>Position</label>
                                            <input id="addPosition" type="text" className="form-control" placeholder="fill position" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group form-group-default">
                                            <label>Office</label>
                                            <input id="addOffice" type="text" className="form-control" placeholder="fill office" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer no-bd">
                            <button type="button" id="addRowButton" className="btn btn-primary">Add</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Model;