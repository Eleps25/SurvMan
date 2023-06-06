import React, { useState } from "react";
import "../../../css/ModalWindows.css";

import "../../../css/NewColors.css";
import { IQuestionnaire } from "../Questionaires";

interface IQuestionnaireDetail {
  data: IQuestionnaire,
  isEditing: boolean,
  id: number,
  handleUpdate: Function,
  handleClose: Function
}

const QuestionaireDetail: React.FC<IQuestionnaireDetail> = (props) => {
  const [questData, setQuestData] = useState<IQuestionnaire>(props.data);

  const handleUpdate = (evt: any): void => {
    evt.preventDefault();
    props.handleUpdate(props.id, questData);
  };

  const handleChange = (evt: any): void => {
    setQuestData((prevState) => {
      return { ...prevState, [evt.target.name]: evt.target.value };
    });
  };

  const handleClose = (): void => {
    props.handleClose();
  };

  return (
    <div className="modal-window-back">
      <div className="modal-window">
        <div className="modal-window-head">
          <h3>Quest Detail</h3>
          <h3>
            <i className="las la-times" onClick={handleClose} />
          </h3>
        </div>
        <div className="modal-window-form-div">
          <form
            onSubmit={props.isEditing ? handleUpdate : undefined}
            className="row g-3"
          >
            <div className="col-6">
              <label htmlFor="name" className="form-label">
                {" "}
                Název dotazníku
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                defaultValue={questData.name}
                onChange={props.isEditing ? handleChange : undefined}
                disabled={props.isEditing ? false : true}
              />
            </div>
            <div className="col-6">
              <label htmlFor="date" className="form-label">
                {" "}
                Platnost
              </label>
              <input
                type="text"
                className="form-control"
                id="date"
                name="date"
                defaultValue={questData.date}
                onChange={props.isEditing ? handleChange : undefined}
                disabled={props.isEditing ? false : true}
              />
            </div>
            <div className="col-6">
              <label htmlFor="asked" className="form-label">
                {" "}
                Osloveno
              </label>
              <input
                type="text"
                className="form-control"
                id="asked"
                name="asked"
                defaultValue={questData.asked}
                onChange={props.isEditing ? handleChange : undefined}
                disabled={props.isEditing ? false : true}
              />
            </div>
            <div className="col-6">
              <label htmlFor="responded" className="form-label">
                {" "}
                Vyplněno
              </label>
              <input
                type="text"
                className="form-control"
                id="responded"
                name="responded"
                defaultValue={questData.responded}
                onChange={props.isEditing ? handleChange : undefined}
                disabled={props.isEditing ? false : true}
              />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                {" "}
                Popis{" "}
              </label>
              <textarea
                id="description"
                className="form-control"
                name="description"
                defaultValue={questData.description}
                onChange={props.isEditing ? handleChange : undefined}
                disabled={props.isEditing ? false : true}
              />
            </div>
            {props.isEditing && (
              <button className=" btn bgcolor-primary-new modal-window-btn">
                Uložit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionaireDetail;
