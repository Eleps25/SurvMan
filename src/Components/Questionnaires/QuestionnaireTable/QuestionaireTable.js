import React, { useState, useEffect } from "react";
import QuestionaireDetail from "../QuestionnaireDetail/index";
import "../../../css/NewColors.css";

const QuestionaireTable = (props) => {
  const [stateStatus, setStateStatus] = useState({
    isEditing: false,
    isViewing: false,
  });
  const [questId, setQuestId] = useState(0);
  const [quests, setQuests] = useState(props.data);
  const [currentQuestIndex, setCurrentQuestIndex] = useState(0);

  const handleEdit = (id) => {
    setQuestId(id);
    setCurrentQuestIndex(quests.findIndex(quest => quest.questId === id));
    setStateStatus({ isEditing: true, isViewing: false });
  };

  const handleView = (id) => {
    setQuestId(id);
    setCurrentQuestIndex(quests.findIndex(quest => quest.questId === id));
    setStateStatus({ isEditing: false, isViewing: true });
  };

  const handleUpdate = (id, change) => {
    const updatedQuests = quests.map((quest) => {
      if (quest.questId === id) {
        return { ...change };
      }
      return quest;
    });
    setQuests(updatedQuests);
    alert("Úspěšně uloženo");
  };

  const handleClose = () => {
    setStateStatus({ isEditing: false, isViewing: false });
  };

  useEffect(()=> {
    setQuests(props.data);
  },[props]);

  return (
    <div className="px-3 py-2 mb-3 mx-auto">
      <h2 className="text-start">{props.questName}</h2>
      <div style={{ borderRadius: "0.5em", overflow: "hidden" }}>
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
            {quests.map((item) => {
              return (
                <tr key={item.questId}>
                  <td className="pt-3 fw-bold">{item.name}</td>
                  <td className="pt-3">{item.date}</td>
                  <td>
                    <div
                      style={{ width: "45px", height: "45px" }}
                      className="p-2 border rounded-circle bgcolor-secondary-new text-light text-center"
                    >
                      <span>{item.asked}</span>
                    </div>
                  </td>
                  <td>
                    <div
                      style={{ width: "45px", height: "45px" }}
                      className="p-2 border rounded-circle bg-success text-light text-center"
                    >
                      <span>{item.responded}</span>
                    </div>
                  </td>
                  {props.isEditable ? (
                    <td>
                      <i
                        className="pt-1 las la-pen"
                        style={{ fontSize: "32px" }}
                        onClick={() => handleEdit(item.questId)}
                      />
                      <i
                        className="pt-1 las la-trash"
                        style={{ fontSize: "32px" }}
                      />
                      <i
                        className="pt-1 las la-info-circle"
                        style={{ fontSize: "32px" }}
                        onClick={() => handleView(item.questId)}
                      />
                    </td>
                  ) : (
                    <td>
                      <i
                        className="px-2 pt-1 las la-trash"
                        style={{ fontSize: "32px" }}
                      />
                      <i
                        className="px-2 pt-1 las la-info-circle"
                        style={{ fontSize: "32px" }}
                        onClick={() => handleView(item.questId)}
                      />
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        {stateStatus.isEditing ? (
          <QuestionaireDetail
            data={quests[currentQuestIndex]}
            isEditing={stateStatus.isEditing}
            id={questId}
            handleUpdate={handleUpdate}
            handleClose={handleClose}
          />
        ) : null}
        {stateStatus.isViewing ? (
          <QuestionaireDetail
            data={quests[currentQuestIndex]}
            isEditing={stateStatus.isEditing}
            id={questId}
            handleUpdate={handleUpdate}
            handleClose={handleClose}
          />
        ) : null}
      </div>
    </div>
  );
};

export default QuestionaireTable;
