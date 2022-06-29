import React, { Component } from "react";
import Footer from "./Footer.js";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./css/Dashboard.css";
import "./css/NewColors.css";
import QuestImage from "./sources/QuestImg.jpg";
import UsersImage from "./sources/UsersImg.png";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="dashboard-welcome">
                    <h1 className="textcolor-primary-new">Vítejte</h1>
                    <h2 className="textcolor-primary-new">Kam chcete pokračovat?</h2>
                </div>
                <div className="dashboard-paths">
                    <div className="dashboard-path-container">
                        <button className="btn bgcolor-primary-new dashboard-window-btn">
                            <Link
                                to="/questionnaire-manager"
                                className="textcolor-primary-new text-light fs-2"
                                style={{ textDecoration: "none" }}>Dotazníky</Link>
                        </button>
                        <img src={QuestImage} className="dashboard-image" />
                    </div>
                    <div className="dashboard-path-container">
                        <button className="btn bgcolor-primary-new dashboard-window-btn">
                            <Link
                                to="/user-manager"
                                className="textcolor-primary-new text-light fs-2"
                                style={{ textDecoration: "none" }}>Uživatelé</Link>
                        </button>
                        <img src={UsersImage} className="dashboard-image" />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Dashboard;