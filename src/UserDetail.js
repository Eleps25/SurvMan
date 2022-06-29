import React, { Component } from "react";
import "./css/ModalWindows.css"
import "./css/NewColors.css"

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: this.props.data[this.props.id - 1]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.handleUpdate(this.props.id, this.state.userData);
    }

    handleChange(evt) {
        this.setState(prevState => ({
            userData: { ...prevState.userData, [evt.target.name]: evt.target.value }
        }));
    };

    handleChecked(evt) {
        const target = evt.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState(prevState => ({
            userData: { ...prevState.userData, [name]: value }
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
                        <h3>User Detail</h3>
                        <h3><i className="las la-times" onClick={this.handleClose} /></h3>
                    </div>
                    <div className="modal-window-form-div">
                        <form onSubmit={this.handleUpdate} className="row g-3">
                            <div clasName="col-6">
                                <label htmlFor="user" className="form-label"> Uživatel</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="user"
                                    name="user"
                                    defaultValue={this.state.userData.user}
                                    onChange={this.props.isEditing ? this.handleChange : null}
                                    disabled={this.props.isEditing ? false : true}
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="email" className="form-label"> E-mail</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    defaultValue={this.state.userData.email}
                                    onChange={this.props.isEditing ? this.handleChange : null}
                                    disabled={this.props.isEditing ? false : true}
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="phone" className="form-label"> Telefon</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    defaultValue={this.state.userData.phone}
                                    onChange={this.props.isEditing ? this.handleChange : null}
                                    disabled={this.props.isEditing ? false : true}
                                />
                            </div>
                            <div className="col-12">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="twoF"
                                    checked={this.state.userData.twoF}
                                    name="twoF"
                                    onChange={this.props.isEditing ? this.handleChecked : null}
                                    disabled={this.props.isEditing ? false : true} />
                                <label htmlFor="twoF" className="form-check-label"> 2F</label>
                            </div>
                            <div className="col-12">
                                <label htmlFor="description" className="form-label"> Popis </label>
                                <textarea
                                    id="description"
                                    className="form-control"
                                    name="description"
                                    defaultValue={this.state.userData.description}
                                    onChange={this.props.isEditing ? this.handleChange : null}
                                    disabled={this.props.isEditing ? false : true} />
                            </div>
                            {this.props.isEditing && <button className="btn bgcolor-primary-new modal-window-btn">Uložit</button>}
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetail;