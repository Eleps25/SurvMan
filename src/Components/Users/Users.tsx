import React, { useEffect, useState } from "react";
import UserTable from "./UserTable/index";
import Footer from "../Footer/index";
import Header from "../Header/index";

import useApiFetch from "../../customHooks/useApiFetch";

import "../../css/NewColors.css";

const Users: React.FC = () => {
  const { data, isLoad } = useApiFetch(
    "https://api.npoint.io/acb9c28e002596b28c02"
  );
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (isLoad) {
      setUserData(data);
    }
  }, [isLoad]);

  return (
    <div>
      <Header />
      <h1 className="textcolor-primary-new text-start ps-3">UŽIVATELÉ</h1>
      {isLoad ? (
        <UserTable userName="Aktivní uživatelé" data={userData} />
        ) : (
        <p>Loading</p>
      )}
      <Footer />
    </div>
  );
};

export default Users;
