import React, { useState, useEffect } from "react";
import Footer from "../Footer/index";
import QuestionaireTable from "./QuestionnaireTable/index";
import Header from "../Header/Header";
import questionnairesData from "../../sources/Questionnaires.json";
import "../../css/NewColors.css";

export interface IQuestionnaire {
  questId: number,
  name: string,
  date: string,
  asked: number,
  responded: number,
  description: string,
  isCompleted: boolean
}

const Questionaires: React.FC = () => {
  const [activeQuestData, setActiveQuestData] = useState<IQuestionnaire[]|[]>([]);
  const [completedQuestData, setCompletedQuestData] = useState<IQuestionnaire[]|[]>([]);

  const filterQuestData = () => {
    setActiveQuestData(questionnairesData.filter((quest: IQuestionnaire) => quest.isCompleted === true));
    setCompletedQuestData(questionnairesData.filter((quest: IQuestionnaire) => quest.isCompleted === false));
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
      <Footer />
    </div>
  );
};

export default Questionaires;
