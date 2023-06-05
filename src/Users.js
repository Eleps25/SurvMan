import React from "react";
import UserTable from "./UserTable";
import UsersData from "./sources/UsersData.json";
import Footer from "./Footer";
import Header from "./Header";
import "./css/NewColors.css";

const Users = () => {
  console.log(UsersData);
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
