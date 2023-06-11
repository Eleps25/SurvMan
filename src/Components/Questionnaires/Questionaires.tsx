import React, { useState, useEffect } from "react";
import Footer from "../Footer/index";
import QuestionaireTable from "./QuestionnaireTable/index";
import Header from "../Header/Header";
//import questionnairesData from "../../sources/Questionnaires.json";

import useApiFetch from "../../customHooks/useApiFetch";

import "../../css/NewColors.css";

export interface IQuestionnaire {
  questId: number;
  name: string;
  date: string;
  asked: number;
  responded: number;
  description: string;
  isCompleted: boolean;
}

const Questionaires: React.FC = () => {
  const [activeQuestData, setActiveQuestData] = useState<IQuestionnaire[] | []>(
    []
  );
  const [completedQuestData, setCompletedQuestData] = useState<
    IQuestionnaire[] | []
  >([]);

  const { data, isLoad } = useApiFetch(
    "https://api.npoint.io/1c108ca65cb9ba34cb06"
  );
  const [questionnairesData, setQuestionnairesData] = useState([]);

  useEffect(() => {
    if (isLoad) {
      setQuestionnairesData(data);
    }
  }, [isLoad]);

  const filterQuestData = () => {
    setActiveQuestData(
      questionnairesData.filter(
        (quest: IQuestionnaire) => quest.isCompleted === true
      )
    );
    setCompletedQuestData(
      questionnairesData.filter(
        (quest: IQuestionnaire) => quest.isCompleted === false
      )
    );
  };

  useEffect(() => {
    filterQuestData();
  }, [questionnairesData]);

  return (
    <div>
      <Header />
      <h1 className="textcolor-primary-new text-start ps-3">DOTAZNÍKY</h1>
      {isLoad ? (
        <>
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
        </>
      ) : (
        <p>Loading</p>
      )}
      <Footer />
    </div>
  );
};

export default Questionaires;
