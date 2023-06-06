import React, { useState } from "react";
import "../../../css/ModalWindows.css";
import "../../../css/NewColors.css";

const UserDetail = (props) => {
  const [userData, setUserData] = useState(props.data[props.id - 1]);

  const handleUpdate = (evt) => {
    evt.preventDefault();
    props.handleUpdate(props.id, userData);
  };

  const handleChange = (evt) => {
    setUserData((prevState) => {
      return { ...prevState, [evt.target.name]: evt.target.value };
    });
  };

  const handleChecked = (evt) => {
    const target = evt.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setUserData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleClose = () => {
    props.handleClose();
  };

  return (
    <div className="modal-window-back">
      <div className="modal-window">
        <div className="modal-window-head">
          <h3>User Detail</h3>
          <h3>
            <i className="las la-times" onClick={handleClose} />
          </h3>
        </div>
        <div className="modal-window-form-div">
          <form onSubmit={handleUpdate} className="row g-3">
            <div className="col-6">
              <label htmlFor="user" className="form-label">
                {" "}
                Uživatel
              </label>
              <input
                type="text"
                className="form-control"
                id="user"
                name="user"
                defaultValue={userData.user}
                onChange={props.isEditing ? handleChange : null}
                disabled={props.isEditing ? false : true}
              />
            </div>
            <div className="col-6">
              <label htmlFor="email" className="form-label">
                {" "}
                E-mail
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                defaultValue={userData.email}
                onChange={props.isEditing ? handleChange : null}
                disabled={props.isEditing ? false : true}
              />
            </div>
            <div className="col-6">
              <label htmlFor="phone" className="form-label">
                {" "}
                Telefon
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                defaultValue={userData.phone}
                onChange={props.isEditing ? handleChange : null}
                disabled={props.isEditing ? false : true}
              />
            </div>
            <div className="col-12">
              <input
                type="checkbox"
                className="form-check-input"
                id="twoF"
                checked={userData.twoF}
                name="twoF"
                onChange={props.isEditing ? handleChecked : null}
                disabled={props.isEditing ? false : true}
              />
              <label htmlFor="twoF" className="form-check-label">
                {" "}
                2F
              </label>
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
                defaultValue={userData.description}
                onChange={props.isEditing ? handleChange : null}
                disabled={props.isEditing ? false : true}
              />
            </div>
            {props.isEditing && (
              <button className="btn bgcolor-primary-new modal-window-btn">
                Uložit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
