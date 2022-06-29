import React, { Component } from "react";
import QuestionaireDetail from "./QuestionaireDetail";
import "./css/NewColors.css";

class QuestionaireTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            isViewing: false,
            questID: 1,
            quests: this.props.data
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleView = this.handleView.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleEdit(id) {
        this.setState({ isEditing: true, questID: id });
    }

    handleView(id) {
        this.setState({ isViewing: true, questID: id });
    }

    handleUpdate(id, change) {
        const updatedQuests = this.state.quests.map(ch => {
            if (ch.activeQuestID === id) {
                return { ...change }
            }
            return ch;
        });
        this.setState({ quests: updatedQuests });
        alert('Úspěšně uloženo');
    }

    handleClose() {
        this.setState({ isEditing: false, isViewing: false });
    }

    render() {
        return (
            <div className="px-3 py-2 mb-3 mx-auto">
                <h2 className="text-start">{this.props.questName}</h2>
                <div style={{ borderRadius: '0.5em', overflow: 'hidden' }}>
                    <table className="table table-striped">
                        <thead className="bgcolor-primary-new text-light">
                            <tr className="fw-bold">
                                <th>Název dotazníku</th>
                                <th>Platnost</th>
                                <th>Osloveno</th>
                                <th>Vyplněno</th>
                                <th>Možnosti</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.quests.map((item) => {
                                return (
                                    <tr>
                                        <td className="pt-3 fw-bold">{item.name}</td>
                                        <td className="pt-3">{item.date}</td>
                                        <td>
                                            <div
                                                style={{ width: "45px", height: "45px" }}
                                                className="p-2 border rounded-circle bgcolor-secondary-new text-light text-center">
                                                <span >{item.asked}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                style={{ width: "45px", height: "45px" }}
                                                className="p-2 border rounded-circle bg-success text-light text-center">
                                                <span >{item.responded}</span>
                                            </div>
                                        </td>
                                        {
                                            this.props.isEditable
                                                ? <td>
                                                    <i className="pt-1 las la-pen" style={{ fontSize: "32px" }} onClick={() => this.handleEdit(item.activeQuestID)} />
                                                    <i className="pt-1 las la-trash" style={{ fontSize: "32px" }} />
                                                    <i className="pt-1 las la-info-circle" style={{ fontSize: "32px" }} onClick={() => this.handleView(item.activeQuestID)} />
                                                </td>
                                                : <td>
                                                    <i className="px-2 pt-1 las la-trash" style={{ fontSize: "32px" }} />
                                                    <i className="px-2 pt-1 las la-info-circle" style={{ fontSize: "32px" }} onClick={() => this.handleView(item.completeQuestID)} />
                                                </td>
                                        }

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {this.state.isEditing
                        ? <QuestionaireDetail
                            data={this.state.quests}
                            isEditing={this.state.isEditing}
                            id={this.state.questID}
                            handleUpdate={this.handleUpdate}
                            handleClose={this.handleClose}
                        />
                        : null
                    }
                    {this.state.isViewing
                        ? <QuestionaireDetail
                            data={this.state.quests}
                            isEditing={this.state.isEditing}
                            id={this.state.questID}
                            handleUpdate={this.handleUpdate}
                            handleClose={this.handleClose}
                        />
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default QuestionaireTable;