import React, { Component } from "react";
import UserDetail from "./UserDetail";
import "./css/NewColors.css";
import "./css/ModalWindows.css";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            isViewing: false,
            userID: 1,
            users: this.props.data
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEddit = this.handleEdit.bind(this);
        this.handleView = this.handleView.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    handleEdit(id) {
        this.setState({ isEditing: true, userID: id });
    }

    handleView(id) {
        this.setState({ isViewing: true, userID: id });
    }

    handleUpdate(id, change) {
        const updatedUser = this.state.users.map(ch => {
            if (ch.userID === id) {
                return { ...change }
            }
            return ch;
        });
        this.setState({ users: updatedUser });
        alert('Úspěšně uloženo');
    }

    handleClose() {
        this.setState({ isEditing: false, isViewing: false });
    }

    render() {
        return (
            <div className="px-3 py-2 mb-3 mx-auto">
                <h2 className="text-start">{this.props.userName}</h2>
                <table className="table table-striped">
                    <thead className="bgcolor-primary-new text-light">
                        <tr className="fw-bold">
                            <th>Název usery</th>
                            <th>E-mail</th>
                            <th>Telefon</th>
                            <th>2F</th>
                            <th>Možnosti</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((item) => {
                            return (
                                <tr>
                                    <td className="fw-bold">{item.user}</td>
                                    <td >{item.email}</td>
                                    <td >{item.phone}</td>
                                    <td ><span className={item.twoF ? "p-1 border rounded bg-success text-light" : "py-1 px-2 border rounded bgcolor-tertiary-new text-light"}>{item.twoF ? "Ano" : "Ne"}</span></td>
                                    <td><i className="las la-pen" style={{ fontSize: "24px" }} onClick={() => this.handleEdit(item.userID)} />
                                        <i className="las la-info-circle" style={{ fontSize: "24px" }} onClick={() => this.handleView(item.userID)} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {this.state.isEditing
                    ? <UserDetail
                        data={this.state.users}
                        isEditing={this.state.isEditing}
                        id={this.state.userID}
                        handleUpdate={this.handleUpdate}
                        handleClose={this.handleClose}
                        className="modal"
                    />
                    : null}
                {this.state.isViewing
                    ? <UserDetail
                        data={this.state.users}
                        isEditing={this.state.isEditing}
                        id={this.state.userID}
                        handleUpdate={this.handleUpdate}
                        handleClose={this.handleClose}
                        className="modal"
                    />
                    : null}
            </div>
        )
    }
}

export default User;