import React, { Component } from "react";
import "./css/ModalWindows.css";
import "./css/NewColors.css"

class QuestionaireDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questData: this.props.data[this.props.id - 1]
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.handleUpdate(this.props.id, this.state.questData);
    }

    handleChange(evt) {
        this.setState(prevState => ({
            questData: { ...prevState.questData, [evt.target.name]: evt.target.value }
        }));
    }

    handleClose() {
        this.props.handleClose();
    }

    render() {
        return (
            <div className="modal-window-back">
                <div className="modal-window">
                    <div className="modal-window-head">
                        <h3>Quest Detail</h3>
                        <h3><i className="las la-times" onClick={this.handleClose} /></h3>
                    </div>
                    <div className="modal-window-form-div">
                        <form onSubmit={this.props.isEditing ? this.handleUpdate : null} className="row g-3">
                            <div clasName="col-6">
                                <label htmlFor="name" className="form-label"> Název dotazníku</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    defaultValue={this.state.questData.name}
                                    onChange={this.props.isEditing ? this.handleChange : null}
                                    disabled={this.props.isEditing ? false : true} />
                            </div>
                            <div clasName="col-6">
                                <label htmlFor="date"
                                    className="form-label"> Platnost</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                    defaultValue={this.state.questData.date}
                                    onChange={this.props.isEditing ? this.handleChange : null}
                                    disabled={this.props.isEditing ? false : true} />
                            </div>
                            <div className="col-6">
                                <label htmlFor="asked" className="form-label"> Osloveno</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="asked"
                                    name="asked"
                                    defaultValue={this.state.questData.asked}
                                    onChange={this.props.isEditing ? this.handleChange : null}
                                    disabled={this.props.isEditing ? false : true} />
                            </div>
                            <div className="col-6">
                                <label htmlFor="responded" className="form-label"> Vyplněno</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="responded"
                                    name="responded"
                                    defaultValue={this.state.questData.responded}
                                    onChange={this.props.isEditing ? this.handleChange : null}
                                    disabled={this.props.isEditing ? false : true} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="description" className="form-label"> Popis </label>
                                <textarea
                                    id="description"
                                    className="form-control"
                                    name="description"
                                    defaultValue={this.state.questData.description}
                                    onChange={this.props.isEditing ? this.handleChange : null}
                                    disabled={this.props.isEditing ? false : true} />
                            </div>
                            {this.props.isEditing && <button className=" btn bgcolor-primary-new modal-window-btn">Uložit</button>}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionaireDetail;