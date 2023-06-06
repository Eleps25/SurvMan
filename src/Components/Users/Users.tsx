import React from "react";
import UserTable from "./UserTable/index";
import UsersData from "../../sources/UsersData.json";
import Footer from "../Footer/index";
import Header from "../Header/index";
import "../../css/NewColors.css";

const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className="textcolor-primary-new text-start ps-3">UŽIVATELÉ</h1>
      <UserTable userName="Aktivní uživatelé" data={UsersData} />
      <Footer />
    </div>
  );
};

export default Users;
