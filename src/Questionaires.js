import React, { Component } from "react";
import Footer from "./Footer";
import QuestionaireTable from "./QuestionaireTable";
import Header from "./Header";
import ActiveQuestData from "./sources/QuestionersActive.json";
import DoneQuestData from "./sources/QuestionersDone.json";
import "./css/NewColors.css";

class Questionaires extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1 className="textcolor-primary-new text-start ps-3">DOTAZNÍKY</h1>
                <QuestionaireTable
                    questName="Aktivní dotazníky"
                    data={ActiveQuestData}
                    isEditable={true}
                />
                <QuestionaireTable
                    questName="Dokončené dotazníky"
                    data={DoneQuestData}
                    isEditable={false}
                />
                <Footer />
            </div>
        )
    }
}

export default Questionaires;