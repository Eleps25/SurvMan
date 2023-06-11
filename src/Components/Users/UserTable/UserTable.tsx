import React, { useState, useEffect } from "react";
import UserDetail from "../UserDetail/index";
import "../../../css/NewColors.css";
import "../../../css/ModalWindows.css";

export interface IUser {
  userID: number,
  user: string,
  email: string,
  phone: string,
  twoF: boolean,
  description: string
}

const UserTable: React.FC<{userName: string, data: IUser[]}> = (props) => {
  const [stateStatus, setStateStatus] = useState<{isEditing: boolean, isViewing: boolean}>({
    isEditing: false,
    isViewing: false,
  });
  const [userId, setUserId] = useState<number>(1);
  const [users, setUsers] = useState<IUser[]>(props.data);

  const handleEdit = (id: number): void => {
    setStateStatus({ isEditing: true, isViewing: false });
    setUserId(id);
  };

  const handleView = (id: number): void => {
    setStateStatus({ isEditing: false, isViewing: true });
    setUserId(id);
  };

  const handleUpdate = (id: number, userToChange: IUser): void => {
    const updatedUser = users.map((person: IUser) => {
      if (person.userID === id) {
        return { ...userToChange };
      }
      return person;
    });
    setUsers(updatedUser);
    alert("Úspěšně uloženo");
  };

  const handleClose = (): void => {
    setStateStatus({ isEditing: false, isViewing: false });
  };

  useEffect(() => {
    setUsers(props.data);
  }, [props])

  return (
    <div className="px-3 py-2 mb-3 mx-auto">
      <h2 className="text-start">{props.userName}</h2>
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
          {users.map((item: IUser) => {
            return (
              <tr key={item.userID}>
                <td className="fw-bold">{item.user}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <span
                    className={
                      item.twoF
                        ? "p-1 border rounded bg-success text-light"
                        : "py-1 px-2 border rounded bgcolor-tertiary-new text-light"
                    }
                  >
                    {item.twoF ? "Ano" : "Ne"}
                  </span>
                </td>
                <td>
                  <i
                    className="las la-pen"
                    style={{ fontSize: "24px" }}
                    onClick={() => handleEdit(item.userID)}
                  />
                  <i
                    className="las la-info-circle"
                    style={{ fontSize: "24px" }}
                    onClick={() => handleView(item.userID)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {stateStatus.isEditing ? (
        <UserDetail
          data={users}
          isEditing={stateStatus.isEditing}
          id={userId}
          handleUpdate={handleUpdate}
          handleClose={handleClose}
          className="modal"
        />
      ) : null}
      {stateStatus.isViewing ? (
        <UserDetail
          data={users}
          isEditing={stateStatus.isEditing}
          id={userId}
          handleUpdate={handleUpdate}
          handleClose={handleClose}
          className="modal"
        />
      ) : null}
    </div>
  );
};

export default UserTable;
