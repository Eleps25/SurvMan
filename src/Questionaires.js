import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import QuestionaireTable from "./QuestionaireTable";
import Header from "./Header";
import questionnairesData from "./sources/Questionnaires.json";
import "./css/NewColors.css";

const Questionaires = () => {
  const [activeQuestData, setActiveQuestData] = useState([]);
  const [completedQuestData, setCompletedQuestData] = useState([]);

  const filterQuestData = () => {
    setActiveQuestData(questionnairesData.filter(quest => quest.isCompleted === true));
    setCompletedQuestData(questionnairesData.filter(quest => quest.isCompleted === false));
  };

  useEffect(() => {
    filterQuestData();
  },[]);

  return (
    <div>
      <Header />
      <h1 className="textcolor-primary-new text-start ps-3">DOTAZNÍKY</h1>
      <QuestionaireTable
        questName="Aktivní dotazníky"
        data={activeQuestData}
        isEditable={true}
      />
      <QuestionaireTable
        questName="Dokončené dotazníky"
        data={completedQuestData}
        isEditable={false}
      />
      <button onClick={filterQuestData}>Click</button>
      <Footer />
    </div>
  );
};

export default Questionaires;
