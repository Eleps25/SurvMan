import React, { useState } from "react";
import logo from "./sources/Logo.PNG";
import { Navigate, NavLink } from "react-router-dom";
import "./css/Header.css";
import "./css/NewColors.css";

const Header = () => {
  const [logOff, setLogOff] = useState(false);

  const handleLogout = () => {
    setLogOff(true);
  };

  return (
    <header className="py-3 mb-3 border-bottom">
      <div className="px-2">
        <div className="d-flex align-items-center justify-content-between">
          <img
            src={logo}
            alt="Logo SurMan"
            widt="64"
            height="64"
            style={{ borderRadius: "0.3em" }}
          />
          <ul className="nav nav-pills fw-bold">
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/dashboard"
                className="nav-link textcolor-primary-new"
              >
                DASHBOARD
              </NavLink>
            </li>
            <li>
              <NavLink
                exact="true"
                to="/questionnaire-manager"
                className="nav-link textcolor-primary-new"
              >
                DOTAZNÍKY
              </NavLink>
            </li>
            <li>
              <NavLink
                exact="true"
                to="/user-manager"
                className="nav-link textcolor-primary-new"
              >
                UŽIVATELÉ
              </NavLink>
            </li>
          </ul>
          <div className="dropdown tex-end">
            <a
              className="fw-bold textcolor-primary-new d-block text-decoration-none dropdown-toggle px-2"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="las la-user-circle" style={{ fontSize: "24px" }} />{" "}
              JAN NOVÁK
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a
                  className="dropdown-item textcolor-primary-new header-logout"
                  onClick={handleLogout}
                >
                  Odhlásit se
                </a>
              </li>
            </ul>
          </div>
          {logOff && <Navigate to="/login" replace={true} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
